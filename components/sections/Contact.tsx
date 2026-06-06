'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldAlert, BadgeCheck, BarChart3, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { contactStore, inboxStore } from '@/lib/data-store';

export function Contact() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Consolidated form state
  const [formData, setFormData] = useState({
    // Shared
    name: '',
    email: '',
    phone: '',
    urgency: 'Medium',
    
    // Logic specific
    department: 'General Inquiry',
    company: '',
    service: '',
    product: '',
    issueDescription: '',
    projectType: '',
    projectDescription: '',
    interestedServices: '',
    quoteDetails: '',
    
    // General section specifics
    setup: '',
    challenges: '',
    otherService: '',
    otherProduct: '',
    otherProjectType: '',
    otherInterestedService: '',
    contactMethods: [] as string[],
    additionalInfo: '',
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (method: string, checked: boolean) => {
    setFormData(prev => {
      if (checked) {
        return { ...prev, contactMethods: [...prev.contactMethods, method] };
      } else {
        return { ...prev, contactMethods: prev.contactMethods.filter(m => m !== method) };
      }
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${text} copied to clipboard.`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ ...formData, tab: activeTab }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        // Save to local inbox store for admin monitoring
        inboxStore.add({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          department: activeTab,
          urgency: formData.urgency,
          message: formData.issueDescription || formData.projectDescription || formData.quoteDetails || '',
          details: formData
        });

        toast({
          title: 'Request Sent Successfully!',
          description: `Thank you, ${formData.name}. A confirmation record has been sent to ${formData.email}. Our ${activeTab} team will follow up shortly.`,
        });
        // Reset form
        setFormData({
          name: '', email: '', phone: '', urgency: 'Medium',
          department: activeTab, company: '', service: '', product: '', issueDescription: '',
          projectType: '', projectDescription: '', interestedServices: '', quoteDetails: '',
          setup: '', challenges: '', otherService: '', otherProduct: '', 
          otherProjectType: '', otherInterestedService: '',
          contactMethods: [], additionalInfo: '',
        });
      } else {
        throw new Error(result.message || 'Server error occurred during transmission.');
      }
    } catch (error: any) {
      toast({
        title: 'Submission Error',
        description: error.message || 'We encountered a problem. Please try again or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  interface ContactInfoItem {
    icon: any;
    label: string;
    value?: string;
    values?: string[];
    href?: string;
  }

  const [dynamicContactInfo, setDynamicContactInfo] = useState<ContactInfoItem[]>([]);

  useEffect(() => {
    const raw = contactStore.getAll();
    const phones = raw.filter(c => c.key.startsWith('phone'));
    const emails = raw.filter(c => c.key.startsWith('email'));
    const address = raw.find(c => c.key === 'address');

    setDynamicContactInfo([
      ...phones.map(p => ({ icon: Phone, label: p.label, value: p.value as string, href: p.href })),
      { icon: Mail, label: 'Email', values: emails.map(e => e.value) },
      ...(address ? [{ icon: MapPin, label: address.label, value: address.value as string, href: address.href }] : [])
    ]);
  }, []);

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-[#020617] text-white">
      {/* Dynamic tech-mesh background & subtle glow overlay */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
        <img src="/images/contact-us-map.png" alt="Map" className="w-full h-full object-cover object-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#030712]/90 to-[#020617]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6" style={{fontFamily:'var(--font-montserrat,Montserrat,sans-serif)'}}>
            ITSEC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">PORTAL</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-xl md:text-2xl text-slate-300 font-bold">Select a department to get specialized enterprise support.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-slate-900/60 border border-slate-800 mb-8 rounded-2xl gap-2 font-bold backdrop-blur-md">
                <TabsTrigger value="general" className="rounded-xl py-3 border-2 border-transparent data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-800/40 transition-all font-bold uppercase text-xs tracking-wider data-[state=inactive]:text-slate-400 data-[state=inactive]:bg-transparent">
                  <MessageSquare className="w-4 h-4 mr-2 hidden sm:inline" /> General
                </TabsTrigger>
                <TabsTrigger value="support" className="rounded-xl py-3 border-2 border-transparent data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-800/40 transition-all font-bold uppercase text-xs tracking-wider data-[state=inactive]:text-slate-400 data-[state=inactive]:bg-transparent">
                  <ShieldAlert className="w-4 h-4 mr-2 hidden sm:inline" /> Support
                </TabsTrigger>
                <TabsTrigger value="projects" className="rounded-xl py-3 border-2 border-transparent data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-800/40 transition-all font-bold uppercase text-xs tracking-wider data-[state=inactive]:text-slate-400 data-[state=inactive]:bg-transparent">
                  <BadgeCheck className="w-4 h-4 mr-2 hidden sm:inline" /> Contact
                </TabsTrigger>
                <TabsTrigger value="sales" className="rounded-xl py-3 border-2 border-transparent data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-800/40 transition-all font-bold uppercase text-xs tracking-wider data-[state=inactive]:text-slate-400 data-[state=inactive]:bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2 hidden sm:inline" /> Sales
                </TabsTrigger>
              </TabsList>

              <Card className="shadow-2xl border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit}>
                    {/* Shared Top Fields */}
                    <div className="p-8 pb-4 bg-slate-900/30 border-b border-slate-800/80 grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Full Name *</label>
                        <Input placeholder="Your Name" value={formData.name} onChange={(e) => updateField('name', e.target.value)} required className="h-12 bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-500 shadow-inner focus-visible:ring-blue-500/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Address *</label>
                        <Input type="email" placeholder="email@address.com" value={formData.email} onChange={(e) => updateField('email', e.target.value)} required className="h-12 bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-500 shadow-inner focus-visible:ring-blue-500/50" />
                      </div>
                    </div>

                    <div className="p-8 pt-6 space-y-8">
                      {/* Department Context Information */}
                      <div className={`flex items-center space-x-3 text-sm font-black uppercase tracking-widest ${
                        activeTab === 'general' ? 'text-itsec-primary' : 
                        activeTab === 'support' ? 'text-red-400' : 
                        activeTab === 'projects' ? 'text-emerald-400' : 'text-amber-400'
                      }`}>
                        <div className={`w-12 h-1 rounded-full ${
                          activeTab === 'general' ? 'bg-blue-500' : 
                          activeTab === 'support' ? 'bg-red-500' : 
                          activeTab === 'projects' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`} />
                        <span>Department: {activeTab === 'general' ? 'General Inquiry' : activeTab === 'support' ? 'Technical Support' : activeTab === 'projects' ? 'Engineering & Projects' : 'Sales & Pricing'}</span>
                      </div>

                      {/* --- 1. GENERAL TAB --- */}
                      <TabsContent value="general" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Phone Number</label>
                            <Input placeholder="+251..." value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Select Service Interested In *</label>
                            <Select required onValueChange={(v) => updateField('service', v)}>
                              <SelectTrigger className="bg-slate-950/70 border-slate-800 text-white focus:ring-blue-500/50"><SelectValue placeholder="Choose a service..." /></SelectTrigger>
                              <SelectContent className="bg-slate-900 border-slate-800 text-white">
                                {['Security Audit & Compliance', 'Digital Transformation & Automation', 'Web Development & Hosting', 'Data Center Solutions', 'Network Infrastructure', 'Fiber Optic Installation', 'IT Consulting Services', 'Cloud Migration', 'Data Backup & Disaster Recovery'].map(s => <SelectItem key={s} value={s} className="focus:bg-slate-800 focus:text-white cursor-pointer">{s}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Current IT / Cybersecurity Setup</label>
                          <Textarea placeholder="Describe your systems..." rows={2} value={formData.setup} onChange={(e) => updateField('setup', e.target.value)} className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Problems / Challenges</label>
                          <Textarea placeholder="What issues are you facing?" rows={2} value={formData.challenges} onChange={(e) => updateField('challenges', e.target.value)} className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                        </div>
                      </TabsContent>

                      {/* --- 2. SUPPORT TAB --- */}
                      <TabsContent value="support" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Phone Number</label>
                            <Input placeholder="+251..." value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Product / Service Needing Support *</label>
                            <Select required onValueChange={(v) => updateField('product', v)}>
                              <SelectTrigger className="bg-slate-950/70 border-slate-800 text-white focus:ring-blue-500/50"><SelectValue placeholder="Choose product..." /></SelectTrigger>
                              <SelectContent className="bg-slate-900 border-slate-800 text-white">
                                {['Network Infrastructure', 'Fiber Network / Fiber Optic System', 'Cybersecurity System', 'Web Hosting / Web Development', 'Cloud Service'].map(p => <SelectItem key={p} value={p} className="focus:bg-slate-800 focus:text-white cursor-pointer">{p}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Description of Issue (Required) *</label>
                          <Textarea placeholder="Tell us exactly what is wrong..." rows={4} value={formData.issueDescription} onChange={(e) => updateField('issueDescription', e.target.value)} required className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                        </div>
                      </TabsContent>

                      {/* --- 3. PROJECTS TAB --- */}
                      <TabsContent value="projects" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Company / Organization Name</label>
                            <Input placeholder="Your Company" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Project Type / Service Needed *</label>
                            <Select required onValueChange={(v) => updateField('projectType', v)}>
                              <SelectTrigger className="bg-slate-950/70 border-slate-800 text-white focus:ring-blue-500/50"><SelectValue placeholder="Choose project type..." /></SelectTrigger>
                              <SelectContent className="bg-slate-900 border-slate-800 text-white">
                                {['Security Audit & Compliance', 'Digital Transformation & Automation', 'Web Development & Hosting', 'Data Center Solutions', 'Network Infrastructure', 'Fiber Optic Installation', 'IT Consulting Services', 'Cloud Migration', 'Data Backup & Disaster Recovery'].map(p => <SelectItem key={p} value={p} className="focus:bg-slate-800 focus:text-white cursor-pointer">{p}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Project Description (Required) *</label>
                          <Textarea placeholder="Give us an overview of your project requirements..." rows={4} value={formData.projectDescription} onChange={(e) => updateField('projectDescription', e.target.value)} required className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                        </div>
                      </TabsContent>

                      {/* --- 4. SALES TAB --- */}
                      <TabsContent value="sales" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Company Name / Organization</label>
                            <Input placeholder="Your Company" value={formData.company} onChange={(e) => updateField('company', e.target.value)} className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Interested Services *</label>
                            <Select required onValueChange={(v) => updateField('interestedServices', v)}>
                              <SelectTrigger className="bg-slate-950/70 border-slate-800 text-white focus:ring-blue-500/50"><SelectValue placeholder="Interested in..." /></SelectTrigger>
                              <SelectContent className="bg-slate-900 border-slate-800 text-white">
                                {['Security Audit & Compliance', 'Digital Transformation & Automation', 'Web Development & Hosting', 'Data Center Solutions', 'Network Infrastructure', 'Fiber Optic Installation', 'IT Consulting Services', 'Cloud Migration', 'Data Backup & Disaster Recovery'].map(s => <SelectItem key={s} value={s} className="focus:bg-slate-800 focus:text-white cursor-pointer">{s}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Request Details / Quote Description (Required) *</label>
                          <Textarea placeholder="Ask about pricing or request a formal quote..." rows={4} value={formData.quoteDetails} onChange={(e) => updateField('quoteDetails', e.target.value)} required className="bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                        </div>
                      </TabsContent>

                      {/* Sub-fields: Urgency & Contact Method (Shared) */}
                      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-800/80">
                        <div className="space-y-3">
                          <label className="text-xs uppercase tracking-widest font-bold text-slate-400 flex items-center"><Clock className="w-3 h-3 mr-2" /> Urgency Level</label>
                          <RadioGroup defaultValue="Medium" onValueChange={(v) => updateField('urgency', v)} className="flex flex-wrap gap-4">
                            {['Low', 'Medium', 'High', 'Critical'].map(u => (
                              <div key={u} className="flex items-center space-x-2 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800 shadow-inner cursor-pointer hover:bg-slate-900 transition-colors">
                                <RadioGroupItem value={u} id={`u-${u}`} className="border-slate-700 text-itsec-primary" />
                                <label htmlFor={`u-${u}`} className="text-xs font-bold text-slate-300 cursor-pointer">{u}</label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Contact Method</label>
                          <div className="flex flex-wrap gap-4">
                            {['Email', 'Phone', 'Meeting'].map(m => (
                              <label key={m} className="flex items-center space-x-2 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800 shadow-inner cursor-pointer hover:bg-slate-900 transition-colors">
                                <Checkbox onCheckedChange={(c) => handleCheckboxChange(m, c as boolean)} className="border-slate-700 data-[state=checked]:bg-blue-600" />
                                <span className="text-xs font-bold text-slate-300">{m}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full h-16 text-lg font-black uppercase tracking-widest shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] rounded-2xl bg-blue-600 hover:bg-blue-700 text-white">
                        {isSubmitting ? (
                          <span className="flex items-center animate-pulse"><Clock className="w-6 h-6 mr-3 animate-spin" /> Processing...</span>
                        ) : (
                          <span className="flex items-center justify-center">Submit {activeTab} Request <Send className="ml-3 w-6 h-6" /></span>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Tabs>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {dynamicContactInfo.map((info, index) => (
              <Card key={index} className="overflow-hidden border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-xl rounded-2xl group hover:border-itsec-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400">{info.label}</p>
                      {info.values ? (
                        <div className="flex flex-col space-y-1.5 pt-1">
                          {info.values.map(email => (
                            <div key={email} className="flex items-center group/item hover:translate-x-1 transition-transform">
                              <a href={`mailto:${email}`} className="font-bold text-slate-200 hover:text-itsec-primary transition-colors break-all text-sm leading-tight mr-2">
                                {email}
                              </a>
                              <button onClick={() => copyToClipboard(email)} className="opacity-0 group-hover/item:opacity-100 transition-opacity p-1 text-slate-400 hover:text-itsec-primary" title="Copy email">
                                <Send className="w-3 h-3 rotate-45" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center group/item">
                          <a href={info.href} className="font-bold text-slate-200 hover:text-itsec-primary transition-colors block text-lg mr-2">
                            {info.value}
                          </a>
                          <button onClick={() => copyToClipboard(info.value || '')} className="opacity-0 group-hover/item:opacity-100 transition-opacity p-1 text-slate-400 hover:text-itsec-primary" title="Copy to clipboard">
                            <Send className="w-4 h-4 rotate-45" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google Maps Embed with Premium Dark Filter */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <iframe
            title="ITSEC Technology Office Location - Kirkos Church, Addis Ababa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9329!2d38.7537!3d9.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sKirkos%2C+Addis+Ababa%2C+Ethiopia!5e0!3m2!1sen!2set!4v1!"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(40%) contrast(90%) opacity(80%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
