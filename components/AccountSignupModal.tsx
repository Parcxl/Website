'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface AccountSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountSignupModal({ isOpen, onClose }: AccountSignupModalProps) {
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    kvk: '',
    website: '',
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: ''
  });
  const [submittedData, setSubmittedData] = useState({
    voornaam: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSignupStep(1);
      setSubmitSuccess(false);
      setSubmitError(null);
      setFormData({
        bedrijfsnaam: '',
        kvk: '',
        website: '',
        voornaam: '',
        achternaam: '',
        email: '',
        telefoon: ''
      });
    }
  }, [isOpen]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission - REAL API CALL
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/accountaanvraag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // Save submitted data before resetting form
        setSubmittedData({
          voornaam: formData.voornaam,
          email: formData.email
        });
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          bedrijfsnaam: '',
          kvk: '',
          website: '',
          voornaam: '',
          achternaam: '',
          email: '',
          telefoon: ''
        });
      } else {
        setSubmitError(result.error || 'Er is een fout opgetreden. Probeer het opnieuw.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Er is een fout opgetreden. Controleer je internetverbinding en probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      {/* Close button - Fixed top left */}
      <button
        onClick={onClose}
        className="fixed top-8 left-8 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 group border border-gray-200/50"
      >
        <ArrowRight className="text-gray-600 group-hover:text-[#0066ff] rotate-180" size={24} />
      </button>

      {/* Content */}
      <div className="relative h-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full">
            {/* Header - Two Column Layout on Desktop */}
            <div className="mb-12">
              {/* Mobile: Stacked Layout */}
              <div className="md:hidden text-center mb-12">
                <div 
                  className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                    opacity: 0
                  }}
                >
                  <Sparkles className="text-[#0066ff]" size={20} />
                  <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                </div>
                <h1 
                  className="text-5xl font-bold mb-6"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                    opacity: 0
                  }}
                >
                  Start vandaag nog <span className="text-gradient">gratis</span>
                </h1>
                <p 
                  className="text-xl text-gray-600 mb-8"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                    opacity: 0
                  }}
                >
                  Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                </p>

                {/* USP Points */}
                <div 
                  className="flex flex-wrap justify-center gap-4 mb-8"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                    opacity: 0
                  }}
                >
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium text-gray-700">Geen abonnementskosten</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-medium text-gray-700">Beste tarieven</span>
                  </div>
                </div>

                {/* Hero Image */}
                <div 
                  className="relative"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                    opacity: 0
                  }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                  <div className="relative">
                    <Image
                      src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/Sendwise/foto%20sendwise.png"
                      alt="Sendwise Platform"
                      width={800}
                      height={450}
                      className="rounded-3xl shadow-2xl border-4 border-white/50"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: Two Column Layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <div>
                  <div 
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                      opacity: 0
                    }}
                  >
                    <Sparkles className="text-[#0066ff]" size={20} />
                    <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                  </div>
                  <h1 
                    className="text-5xl lg:text-6xl font-bold mb-6"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                      opacity: 0
                    }}
                  >
                    Start vandaag nog <span className="text-gradient">gratis</span>
                  </h1>
                  <p 
                    className="text-xl text-gray-600 mb-8"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                      opacity: 0
                    }}
                  >
                    Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                  </p>

                  {/* USP Points */}
                  <div 
                    className="flex flex-wrap gap-4"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                      <CheckCircle2 className="text-green-500" size={18} />
                      <span className="text-sm font-medium text-gray-700">Geen abonnementskosten</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                      <CheckCircle2 className="text-green-500" size={18} />
                      <span className="text-sm font-medium text-gray-700">Beste tarieven</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Hero Image */}
                <div 
                  className="relative"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                    opacity: 0
                  }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                  <div className="relative">
                    <Image
                      src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/Sendwise/foto%20sendwise.png"
                      alt="Sendwise Platform"
                      width={800}
                      height={450}
                      className="rounded-3xl shadow-2xl border-4 border-white/50 w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Account Request Form */}
            <div 
              className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl"
              style={{
                animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards',
                opacity: 0
              }}
            >
              {/* Success Message */}
              {submitSuccess ? (
                <div className="text-center py-12 relative overflow-hidden">
                  {/* Confetti Animation */}
                  <div className="absolute inset-0 pointer-events-none select-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div key={i} className={`confetti confetti-${i + 1}`} />
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-in shadow-2xl">
                      <CheckCircle2 className="text-white" size={56} />
                    </div>
                    
                    <div className="mb-4">
                      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                        Welkom bij <span className="text-gradient">Sendwise</span>!
                      </h2>
                    </div>

                    <div className="max-w-2xl mx-auto mb-8">
                      <p className="text-2xl text-gray-700 mb-4">
                        Hey <span className="font-semibold text-[#0066ff]">{submittedData.voornaam}</span>,
                      </p>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        Binnen 24 uur nemen we contact met je op om jouw persoonlijke verzendtarieven door te spreken. 
                        Dan maken we het samen officieel en kun je direct aan de slag!
                      </p>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                      Je ontvangt een bevestiging op <span className="font-medium">{submittedData.email}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Account aanmaken</h2>
                  <p className="text-gray-600 mb-8">
                    Maak je account aan en binnen 24 uur bespreken we de tarieven en activeren wij je account.
                  </p>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Progress Steps */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center gap-4">
                      {/* Step 1 */}
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                          signupStep === 1 
                            ? 'bg-gradient-to-r from-[#0066ff] to-blue-600 text-white shadow-lg' 
                            : signupStep > 1
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          {signupStep > 1 ? <CheckCircle2 size={20} /> : '1'}
                        </div>
                        <span className={`font-medium hidden sm:block ${
                          signupStep === 1 ? 'text-[#0066ff]' : signupStep > 1 ? 'text-green-500' : 'text-gray-500'
                        }`}>
                          Bedrijfsgegevens
                        </span>
                      </div>

                      {/* Divider */}
                      <div className={`w-12 sm:w-20 h-0.5 ${
                        signupStep > 1 ? 'bg-green-500' : 'bg-gray-200'
                      }`}></div>

                      {/* Step 2 */}
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                          signupStep === 2 
                            ? 'bg-gradient-to-r from-[#0066ff] to-blue-600 text-white shadow-lg' 
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          2
                        </div>
                        <span className={`font-medium hidden sm:block ${
                          signupStep === 2 ? 'text-[#0066ff]' : 'text-gray-500'
                        }`}>
                          Contactpersoon
                        </span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Bedrijfsgegevens */}
                    {signupStep === 1 && (
                      <div>
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Bedrijfsnaam *
                            </label>
                            <input
                              type="text"
                              name="bedrijfsnaam"
                              value={formData.bedrijfsnaam}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                              placeholder="Jouw Bedrijf B.V."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              KvK-nummer *
                            </label>
                            <input
                              type="text"
                              name="kvk"
                              value={formData.kvk}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                              placeholder="12345678"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Website *
                            </label>
                            <input
                              type="url"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                              placeholder="https://jouwwebshop.nl"
                            />
                          </div>
                        </div>

                        {/* Navigation Button */}
                        <div className="pt-6">
                          <button
                            type="button"
                            onClick={() => setSignupStep(2)}
                            className="w-full bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] font-semibold inline-flex items-center justify-center gap-3 text-lg shadow-xl"
                          >
                            Volgende stap
                            <ArrowRight size={22} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Contactpersoon */}
                    {signupStep === 2 && (
                      <div>
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Voornaam *
                              </label>
                              <input
                                type="text"
                                name="voornaam"
                                value={formData.voornaam}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                placeholder="Jan"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Achternaam *
                              </label>
                              <input
                                type="text"
                                name="achternaam"
                                value={formData.achternaam}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                placeholder="Jansen"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              E-mailadres *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                              placeholder="jan@jouwbedrijf.nl"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Telefoonnummer *
                            </label>
                            <input
                              type="tel"
                              name="telefoon"
                              value={formData.telefoon}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                              placeholder="+31 6 12345678"
                            />
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="pt-6 flex gap-4">
                          <button
                            type="button"
                            onClick={() => setSignupStep(1)}
                            disabled={isSubmitting}
                            className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-[#0066ff] hover:text-[#0066ff] transition-all font-semibold inline-flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ArrowRight size={22} className="rotate-180" />
                            Vorige
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] font-semibold inline-flex items-center justify-center gap-3 text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          >
                            {isSubmitting ? 'Bezig met aanmaken...' : 'Account aanmaken'}
                            {!isSubmitting && <ArrowRight size={22} />}
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 text-center mt-4">
                          We nemen binnen 24 uur contact op om tarieven te bespreken
                        </p>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>

            {/* Footer Note */}
            <div 
              className="text-center mt-12"
              style={{
                animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
                opacity: 0
              }}
            >
              <p className="text-gray-600">
                Vragen? Neem direct contact op via{' '}
                <a href="mailto:info@sendwise.nl" className="text-[#0066ff] hover:underline font-semibold">
                  info@sendwise.nl
                </a>{' '}
                of{' '}
                <a href="tel:+31619156123" className="text-[#0066ff] hover:underline font-semibold">
                  +31 6 19156123
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

