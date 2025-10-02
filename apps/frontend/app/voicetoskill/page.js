'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function VoiceToSkillPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [goalText, setGoalText] = useState('');
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [inputMode, setInputMode] = useState('voice'); // 'voice' or 'text'
  const [transcript, setTranscript] = useState('');
  const [showTranscript, setShowTranscript] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recognitionRef = useRef(null);
  const router = useRouter();

  const examples = [
    "I want to become a full-stack developer",
    "I want to learn data science and machine learning", 
    "I want to become a UX/UI designer",
    "I want to transition into cybersecurity",
    "I want to become a mobile app developer"
  ];

  const startRecording = async () => {
    try {
      // Initialize speech recognition
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
          setIsRecording(true);
          setTranscript('');
          setShowTranscript(false);
        };
        
        recognition.onresult = (event) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            }
          }
          if (finalTranscript) {
            const cleanTranscript = finalTranscript.trim();
            setTranscript(cleanTranscript);
            // Store the transcript in a ref so we can access it immediately
            recognitionRef.current.finalTranscript = cleanTranscript;
          }
        };
        
        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setIsRecording(false);
          setIsProcessing(false);
          alert('Speech recognition error. Please try again.');
        };
        
        recognition.onend = () => {
          setIsRecording(false);
          setIsProcessing(false);
          // Check if we have a transcript from the recognition
          const finalTranscript = recognitionRef.current?.finalTranscript;
          if (finalTranscript && finalTranscript.trim()) {
            setTranscript(finalTranscript);
            setShowTranscript(true);
          }
        };
        
        recognitionRef.current = recognition;
        recognition.start();
      } else {
        // Fallback to audio recording if speech recognition is not available
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        
        const chunks = [];
        mediaRecorder.ondataavailable = (event) => {
          chunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/wav' });
          setRecordedAudio(blob);
          stream.getTracks().forEach(track => track.stop());
          setIsProcessing(false);
        };
        
        mediaRecorder.start();
        setIsRecording(true);
      }
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check your permissions.');
      setIsRecording(false);
      setIsProcessing(false);
    }
  };

  const stopRecording = () => {
    setIsProcessing(true);
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
    } else if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const confirmTranscript = () => {
    setGoalText(transcript);
    setShowTranscript(false);
    setInputMode('text');
  };

  const reRecord = () => {
    setTranscript('');
    setShowTranscript(false);
    setRecordedAudio(null);
    setIsProcessing(false);
    // Clear the stored transcript in the ref
    if (recognitionRef.current) {
      recognitionRef.current.finalTranscript = '';
    }
  };

  const editTranscript = (newText) => {
    setTranscript(newText);
  };

  const handleMicrophoneClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleContinue = () => {
    if (goalText.trim() || recordedAudio) {
      // Store the goal data (you can implement your preferred storage method)
      localStorage.setItem('userGoal', goalText);
      if (recordedAudio) {
        // Handle audio data as needed
        console.log('Audio recorded:', recordedAudio);
      }
      router.push('/voicetoskill/assessment');
    } else {
      alert('Please record your goal or type it in the text box.');
    }
  };

  const handleExampleClick = (example) => {
    setGoalText(example);
    setInputMode('text');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-blue-600/90"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <span className="mr-2">🎯</span>
              Step 1 of 3
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start Your Learning Journey
          </h1>
          <p className="mt-6 text-xl leading-8 text-indigo-100">
            Tell us what you want to learn, and we'll build your personalized roadmap
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -bottom-12 right-1/4 h-64 w-64 rounded-full bg-purple-400/10 blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-indigo-100/50 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What's your career goal?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tell us what you want to learn, and we'll build your personalized roadmap
            </p>
          </div>

          {/* Input Mode Toggle */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-xl bg-gray-100 p-1">
              <button
                onClick={() => setInputMode('voice')}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                  inputMode === 'voice'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="mr-2">🎤</span>
                Voice Input
              </button>
              <button
                onClick={() => setInputMode('text')}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                  inputMode === 'text'
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="mr-2">✏️</span>
                Type It
              </button>
            </div>
          </div>

          {/* Voice Input Section */}
          {inputMode === 'voice' && (
            <div className="mt-12 text-center">
              <div className="mx-auto flex max-w-md flex-col items-center">
                <button
                  onClick={handleMicrophoneClick}
                  className={`group relative h-32 w-32 rounded-full transition-all duration-300 ${
                    isRecording
                      ? 'bg-red-500 shadow-lg shadow-red-200 hover:bg-red-600'
                      : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300'
                  }`}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    {isRecording ? (
                      <div className="flex flex-col items-center">
                        <div className="h-6 w-6 rounded-sm bg-white"></div>
                        <div className="mt-2 flex space-x-1">
                          <div className="h-1 w-1 animate-pulse rounded-full bg-white"></div>
                          <div className="h-1 w-1 animate-pulse rounded-full bg-white" style={{animationDelay: '0.2s'}}></div>
                          <div className="h-1 w-1 animate-pulse rounded-full bg-white" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    ) : (
                      <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z"/>
                        <path d="M19 10v1a7 7 0 0 1-14 0v-1a1 1 0 0 1 2 0v1a5 5 0 0 0 10 0v-1a1 1 0 1 1 2 0Z"/>
                        <path d="M12 18.5a1 1 0 0 1 1 1V22a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1Z"/>
                      </svg>
                    )}
                  </div>
                  
                  {/* Pulse animation when recording */}
                  {isRecording && (
                    <>
                      <div className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-75"></div>
                      <div className="absolute inset-0 animate-pulse rounded-full bg-red-300 opacity-50"></div>
                    </>
                  )}
                </button>
                
                <p className="mt-6 text-lg font-medium text-gray-700">
                  {isRecording ? 'Recording... Click to stop' : 
                   isProcessing ? 'Processing your speech...' : 
                   'Click to record your goal'}
                </p>
                
                {isProcessing && (
                  <div className="mt-4 flex items-center space-x-2 rounded-lg bg-blue-50 px-4 py-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
                    <span className="text-sm text-blue-700">Converting speech to text...</span>
                  </div>
                )}
                
                {recordedAudio && !showTranscript && (
                  <div className="mt-4 flex items-center space-x-2 rounded-lg bg-green-50 px-4 py-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-green-700">Goal recorded successfully!</span>
                  </div>
                )}
                
                {/* Transcript Review Section */}
                {showTranscript && (
                  <div className="mt-8 w-full max-w-2xl">
                    <div className="rounded-2xl bg-gray-50 border-2 border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">📝</span>
                        Here's what we heard:
                      </h3>
                      
                      {/* Editable Transcript */}
                      <textarea
                        value={transcript}
                        onChange={(e) => editTranscript(e.target.value)}
                        className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        rows={3}
                        placeholder="Edit your goal if needed..."
                      />
                      
                      <p className="mt-2 text-sm text-gray-600">
                        You can edit the text above if there are any mistakes.
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={confirmTranscript}
                          className="flex-1 inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                        >
                          <span className="mr-2">✅</span>
                          Yes, that's correct
                        </button>
                        
                        <button
                          onClick={reRecord}
                          className="flex-1 inline-flex items-center justify-center rounded-xl bg-gray-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors"
                        >
                          <span className="mr-2">🎤</span>
                          Record again
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Text Input Section */}
          {inputMode === 'text' && (
            <div className="mt-12">
              <div className="mx-auto max-w-2xl">
                <div className="relative">
                  <textarea
                    value={goalText}
                    onChange={(e) => setGoalText(e.target.value)}
                    placeholder="I want to become a backend developer"
                    className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-6 py-4 text-lg placeholder-gray-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    rows={4}
                  />
                  <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                    {goalText.length}/500
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OR Divider */}
          <div className="my-12 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm font-medium text-gray-500 bg-white">OR TYPE IT</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Examples Section */}
          <div className="mt-12">
            <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">Examples:</h3>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-left text-gray-700 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <span className="mr-3 text-indigo-400">•</span>
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleContinue}
              disabled={!goalText.trim() && !recordedAudio}
              className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:shadow-xl hover:shadow-indigo-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
            >
              Continue to Assessment
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="h-2 w-8 rounded-full bg-indigo-600"></div>
              <div className="h-2 w-8 rounded-full bg-gray-200"></div>
              <div className="h-2 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Mentor Message */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <span className="text-white font-semibold">AI</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-amber-800">
                <span className="font-semibold">Your AI Career Mentor:</span> Don't worry about being too specific right now. 
                I'll help you refine your goals and create a personalized learning path that matches your current skills and interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
