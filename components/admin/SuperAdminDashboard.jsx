"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SUPER_ADMIN_CREDENTIALS,
  INITIAL_FIELD_STAFF,
  INITIAL_ADMIN_BOOKINGS,
  INITIAL_CORPORATE_LEADS
} from "@/data/adminInitialData";
import { pincodeDirectory } from "@/data/pincodes";
import {
  ShieldCheck,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  MapPin,
  TrendingUp,
  Search,
  Filter,
  LogOut,
  Building2,
  Sparkles,
  Lock,
  ArrowRight,
  Plus,
  RefreshCw,
  AlertCircle,
  FileText,
  DollarSign,
  MessageCircle,
  ChevronRight
} from "lucide-react";

export function SuperAdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState(SUPER_ADMIN_CREDENTIALS.email);
  const [loginPassword, setLoginPassword] = useState(SUPER_ADMIN_CREDENTIALS.password);
  const [loginError, setLoginError] = useState("");

  // Admin Data State
  const [bookings, setBookings] = useState(INITIAL_ADMIN_BOOKINGS);
  const [staffList, setStaffList] = useState(INITIAL_FIELD_STAFF);
  const [corporateLeads, setCorporateLeads] = useState(INITIAL_CORPORATE_LEADS);
  const [activeTab, setActiveTab] = useState("bookings"); // "bookings", "corporate", "staff", "zones"

  // Filter States
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [newAssignee, setNewAssignee] = useState(INITIAL_FIELD_STAFF[0].name);

  // Authentication Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginEmail.trim().toLowerCase() === SUPER_ADMIN_CREDENTIALS.email.toLowerCase() &&
      loginPassword === SUPER_ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Please click 1-Click Fill to load demo credentials.");
    }
  };

  const handle1ClickLogin = () => {
    setLoginEmail(SUPER_ADMIN_CREDENTIALS.email);
    setLoginPassword(SUPER_ADMIN_CREDENTIALS.password);
    setIsAuthenticated(true);
  };

  const handleUpdateStatus = (bookingId, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, jobStatus: newStatus } : b))
    );
  };

  const handleAssignStaff = (e) => {
    e.preventDefault();
    if (!selectedBooking) return;
    setBookings((prev) =>
      prev.map((b) =>
        b.id === selectedBooking.id
          ? {
              ...b,
              assignedTo: newAssignee,
              jobStatus: b.jobStatus === "New" ? "Assigned" : b.jobStatus
            }
          : b
      )
    );
    setAssignModalOpen(false);
    setSelectedBooking(null);
  };

  // Filtered Bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = statusFilter === "all" || b.jobStatus.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch =
      b.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.hub.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Calculate Metrics
  const totalRevenue = bookings.reduce((sum, b) => sum + b.amount, 0);
  const activeJobsCount = bookings.filter((b) => b.jobStatus === "In Progress" || b.jobStatus === "Assigned").length;
  const pendingJobsCount = bookings.filter((b) => b.jobStatus === "New").length;
  const completedJobsCount = bookings.filter((b) => b.jobStatus === "Completed").length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative z-10">
          <div className="text-center space-y-2 mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              SafaiSaarthi Super Admin
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              Jaipur Cleaning Operations & Dispatch Console
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Quick 1-Click Banner */}
          <div className="mb-6 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sky-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-400" />
                1-Click Demo Login
              </span>
              <span className="px-2 py-0.5 rounded-full bg-sky-400/20 text-sky-300 text-[10px] font-bold">
                Owner Access
              </span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Log in as <strong>{SUPER_ADMIN_CREDENTIALS.name}</strong> ({SUPER_ADMIN_CREDENTIALS.title}).
            </p>
            <button
              type="button"
              onClick={handle1ClickLogin}
              className="w-full py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Instant 1-Click Super Admin Login
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Sign In to Super Admin</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              ← Back to Customer Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Super Admin Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-sky-500/20">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight">
                  SafaiSaarthi
                </span>
                <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-wider border border-sky-500/30">
                  Super Admin
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block -mt-0.5">
                Central Operations Command • Jaipur
              </span>
            </div>
          </Link>
        </div>

        {/* Right Admin Profile & Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
            <span className="text-base">{SUPER_ADMIN_CREDENTIALS.avatar}</span>
            <div className="text-left">
              <span className="font-bold text-white block text-[11px] leading-tight">
                {SUPER_ADMIN_CREDENTIALS.name}
              </span>
              <span className="text-[9px] text-sky-400 font-semibold uppercase">
                {SUPER_ADMIN_CREDENTIALS.role}
              </span>
            </div>
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700/60 transition-colors"
          >
            <span>Live Site</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          </Link>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30 transition-colors cursor-pointer"
            title="Log out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Active Bookings</span>
              <Clock className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {activeJobsCount}
            </div>
            <span className="text-[11px] text-sky-400 font-medium mt-1 block">
              + {pendingJobsCount} pending dispatch
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Jaipur Bookings MTD</span>
              <Calendar className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {bookings.length}
            </div>
            <span className="text-[11px] text-emerald-400 font-medium mt-1 block">
              {completedJobsCount} jobs completed ✓
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Revenue Managed</span>
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300">
              ₹{totalRevenue.toLocaleString("en-IN")}
            </div>
            <span className="text-[11px] text-slate-400 font-medium mt-1 block">
              Avg ticket ₹{(totalRevenue / Math.max(1, bookings.length)).toFixed(0)}
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Staff On Duty</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {staffList.filter((s) => s.status === "On Duty").length}
            </div>
            <span className="text-[11px] text-purple-400 font-medium mt-1 block">
              Across 5 Jaipur hubs
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === "bookings"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-400 hover:text-white hover:bg-slate-850"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Bookings & Field Dispatch ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("corporate")}
            className={`px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === "corporate"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-400 hover:text-white hover:bg-slate-850"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Corporate Leads ({corporateLeads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("staff")}
            className={`px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === "staff"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-400 hover:text-white hover:bg-slate-850"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Cleaning Crews & Supervisors ({staffList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("zones")}
            className={`px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === "zones"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-400 hover:text-white hover:bg-slate-850"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Jaipur Serviceable Pincodes</span>
          </button>
        </div>

        {/* TAB 1: BOOKINGS & DISPATCH */}
        {activeTab === "bookings" && (
          <div className="space-y-4">
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 p-3 rounded-2xl border border-slate-800">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by customer, booking ID, service or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 rounded-xl text-xs text-white border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto text-xs">
                {["all", "New", "Assigned", "In Progress", "Completed"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg font-bold capitalize transition-colors cursor-pointer shrink-0 ${
                      statusFilter === st
                        ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Bookings Table / Cards */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-850 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800 text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Booking ID</th>
                      <th className="py-3 px-4">Customer & Phone</th>
                      <th className="py-3 px-4">Cleaning Service</th>
                      <th className="py-3 px-4">Area / Hub</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Assigned To</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-sky-400">
                          {b.id}
                          <span className="block text-[10px] text-slate-500 font-sans font-normal mt-0.5">
                            {b.scheduledDate}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <strong className="text-white block">{b.customer}</strong>
                          <a
                            href={`tel:${b.phone}`}
                            className="text-slate-400 hover:text-sky-300 text-[11px] flex items-center gap-1 mt-0.5"
                          >
                            <Phone className="w-3 h-3 text-sky-400" />
                            {b.phone}
                          </a>
                        </td>
                        <td className="py-3.5 px-4 max-w-[200px]">
                          <span className="font-semibold text-slate-200 block truncate">
                            {b.service}
                          </span>
                          <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                            {b.notes}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700">
                            {b.hub}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white">
                          ₹{b.amount.toLocaleString("en-IN")}
                          <span className="block text-[10px] text-emerald-400 font-normal">
                            {b.paymentStatus}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => {
                              setSelectedBooking(b);
                              setNewAssignee(b.assignedTo === "Unassigned" ? staffList[0].name : b.assignedTo);
                              setAssignModalOpen(true);
                            }}
                            className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline cursor-pointer"
                          >
                            <span>{b.assignedTo}</span>
                            <RefreshCw className="w-3 h-3 opacity-70" />
                          </button>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={b.jobStatus}
                            onChange={(e) => handleUpdateStatus(b.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border cursor-pointer focus:outline-none ${
                              b.jobStatus === "Completed"
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                : b.jobStatus === "In Progress"
                                ? "bg-sky-500/20 text-sky-300 border-sky-500/30"
                                : b.jobStatus === "Assigned"
                                ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                                : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                            }`}
                          >
                            <option value="New" className="bg-slate-900 text-white">New</option>
                            <option value="Assigned" className="bg-slate-900 text-white">Assigned</option>
                            <option value="In Progress" className="bg-slate-900 text-white">In Progress</option>
                            <option value="Completed" className="bg-slate-900 text-white">Completed</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <a
                            href={`https://wa.me/${b.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(b.customer)},%20your%20SafaiSaarthi%20cleaning%20service%20has%20been%20confirmed.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-[11px] transition-colors"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CORPORATE LEADS */}
        {activeTab === "corporate" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {corporateLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-sky-400">{lead.id}</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                    {lead.status}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base">{lead.company}</h3>
                <div className="text-xs text-slate-400 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lead.contactPerson}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lead.phone}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lead.location}</span>
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 text-xs border border-slate-700/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Scope:</span>
                  <p className="font-semibold text-slate-200">{lead.spaceSize} • {lead.frequency}</p>
                  <p className="text-emerald-400 font-bold mt-1">Est. {lead.estimatedValue}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: STAFF & CREWS */}
        {activeTab === "staff" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {staffList.map((st) => (
              <div
                key={st.id}
                className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center border border-sky-500/30">
                      {st.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">{st.name}</h3>
                      <span className="text-[11px] text-slate-400">{st.role}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    {st.status}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Hub:</span>
                    <span className="font-semibold text-white">{st.hub}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Phone:</span>
                    <a href={`tel:${st.phone}`} className="font-mono text-sky-400 hover:underline">
                      {st.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Active Jobs:</span>
                    <span className="font-bold text-amber-400">{st.activeJobs} Jobs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Quality Rating:</span>
                    <span className="font-bold text-emerald-400">★ {st.rating} / 5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: JAIPUR PINCODES */}
        {activeTab === "zones" && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
            <div>
              <h2 className="font-bold text-white text-base">Jaipur Serviceable Pincodes & Hubs</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Manage location coverage and serviceable zones across Jaipur.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {pincodeDirectory.map((pin) => (
                <div
                  key={pin.pincode}
                  className="p-3 rounded-xl bg-slate-850 border border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <span className="font-mono font-bold text-white text-xs block">{pin.pincode}</span>
                    <span className="text-[11px] text-slate-400 block truncate max-w-[130px]">{pin.area}</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" title="Serviceable" />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Staff Assignment Modal */}
      {assignModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-bold text-white text-base">Assign Field Supervisor</h3>
            <p className="text-xs text-slate-400">
              Assign team lead for booking <strong>{selectedBooking.id}</strong> ({selectedBooking.customer}).
            </p>

            <form onSubmit={handleAssignStaff} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Supervisor / Lead
                </label>
                <select
                  value={newAssignee}
                  onChange={(e) => setNewAssignee(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {staffList.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.hub}) - {s.activeJobs} jobs active
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAssignModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 text-xs font-bold hover:bg-sky-400 cursor-pointer"
                >
                  Confirm Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
