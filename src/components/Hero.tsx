import React, { useState, useEffect } from 'react';
import { TrendingUp, MapPin, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabase';

const DEFAULT_VIDEO_URL = 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4';

export const Hero: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>(DEFAULT_VIDEO_URL);

  useEffect(() => {
    loadVideoUrl();

    const handleVideoUpdate = () => {
      loadVideoUrl();
    };

    window.addEventListener('hero-video-updated', handleVideoUpdate);

    return () => {
      window.removeEventListener('hero-video-updated', handleVideoUpdate);
    };
  }, []);

  const loadVideoUrl = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'hero_video_url')
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading hero video:', error);
      }

      if (data?.value) {
        setVideoUrl(data.value);
      } else {
        setVideoUrl(DEFAULT_VIDEO_URL);
      }
    } catch (error) {
      console.error('Error loading hero video:', error);
      setVideoUrl(DEFAULT_VIDEO_URL);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden min-h-[700px]">
      {/* Video Background */}
      <video
        key={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Green Overlay with Transparency */}
      <div className="absolute inset-0 bg-emerald-900/70 z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="text-center relative z-30">
          <div className="inline-flex items-center px-5 py-2.5 bg-emerald-700/80 backdrop-blur-sm border border-emerald-600/50 rounded-full text-sm font-semibold text-white mb-8 shadow-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Trusted by 100+ property owners across the US
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Your CRE Playbook is Dead.<br />
            Profit with Coworking<br />
            Operator-Proven Data.
          </h1>
          <p className="text-lg md:text-xl text-white mb-12 max-w-5xl mx-auto leading-relaxed font-semibold">
            Are you still using outdated CRE methods in a changed coworking office world? DenSwap provides human-centric data, informed by 14 years of opening and operating coworking locations, for truly thriving flexible office spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="/demand-report" className="group bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-all duration-300 text-center inline-flex items-center justify-center">
              Get a Free Demand Report for Your Property
            </a>
            <a href="/sample-report" className="group bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-all duration-300 text-center inline-flex items-center justify-center">
              Download a Sample Feasibility Study
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/30">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">115+</div>
                <div className="text-white text-sm font-semibold">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/30">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">35,000 +</div>
                <div className="text-white text-sm font-semibold">Zip codes Analyzed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/30">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">$500M</div>
                <div className="text-white text-sm font-semibold">Assests Helped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};