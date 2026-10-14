// SafaiSaarthi Jaipur - Super Admin & Operations Data

export const SUPER_ADMIN_CREDENTIALS = {
  email: "admin@safaisarthi.com",
  password: "admin123",
  name: "Rajesh Saini",
  role: "Super Admin",
  title: "Super Admin & Operations Head",
  phone: "+91 91191 19800",
  hub: "Jaipur Central HQ (C-Scheme)",
  avatar: "👑"
};

export const INITIAL_FIELD_STAFF = [
  { id: "stf_1", name: "Mukesh Sharma", role: "Field Supervisor", hub: "Vaishali Nagar", phone: "+91 98291 00101", activeJobs: 2, status: "On Duty", rating: 4.9 },
  { id: "stf_2", name: "Raju Meena", role: "Deep Clean Lead", hub: "Mansarovar", phone: "+91 98291 00102", activeJobs: 1, status: "On Duty", rating: 4.8 },
  { id: "stf_3", name: "Dinesh Kumawat", role: "Sofa & Upholstery Tech", hub: "Malviya Nagar", phone: "+91 98291 00103", activeJobs: 3, status: "On Duty", rating: 4.9 },
  { id: "stf_4", name: "Vikram Gurjar", role: "Pest Control Specialist", hub: "Jagatpura", phone: "+91 98291 00104", activeJobs: 1, status: "On Duty", rating: 4.7 },
  { id: "stf_5", name: "Sunita Devi", role: "Kitchen & Sanitization Lead", hub: "C-Scheme", phone: "+91 98291 00105", activeJobs: 2, status: "On Duty", rating: 5.0 },
];

export const INITIAL_ADMIN_BOOKINGS = [
  {
    id: "BK-JPR-1082",
    customer: "Amitabh Shekhawat",
    phone: "+91 98280 44120",
    address: "Villa 14, Chitrakoot, Vaishali Nagar, Jaipur - 302021",
    service: "3 BHK Full Home Deep Cleaning",
    amount: 4499,
    paymentStatus: "Paid (UPI)",
    jobStatus: "In Progress",
    assignedTo: "Mukesh Sharma",
    scheduledDate: "Today, 10:00 AM",
    hub: "Vaishali Nagar",
    notes: "Move-in cleaning. Balcony pressure wash included."
  },
  {
    id: "BK-JPR-1083",
    customer: "Dr. Sunita Khandelwal",
    phone: "+91 94140 88219",
    address: "B-22, New Sanganer Road, Mansarovar, Jaipur - 302020",
    service: "Kitchen & 2 Bathrooms Intensive Descaling",
    amount: 2299,
    paymentStatus: "Cash on Service",
    jobStatus: "Assigned",
    assignedTo: "Raju Meena",
    scheduledDate: "Today, 02:30 PM",
    hub: "Mansarovar",
    notes: "Heavy oil stains near chimney and hard water marks on tiles."
  },
  {
    id: "BK-JPR-1084",
    customer: "Ananya Saxena",
    phone: "+91 97830 55104",
    address: "Flat 402, Royal Palms, Jagatpura, Jaipur - 302017",
    service: "7-Seater Sofa & Mattress Foam Shampooing",
    amount: 1899,
    paymentStatus: "Paid (NetBanking)",
    jobStatus: "New",
    assignedTo: "Unassigned",
    scheduledDate: "Tomorrow, 11:00 AM",
    hub: "Jagatpura",
    notes: "Light velvet fabric. Use pH-neutral German organic shampoo."
  },
  {
    id: "BK-JPR-1085",
    customer: "Sanjay Goyal (Goyal Jewellers)",
    phone: "+91 98290 12345",
    address: "MI Road, Near Panch Batti, C-Scheme, Jaipur - 302001",
    service: "Commercial Showroom Glass & Floor Scrubbing",
    amount: 8500,
    paymentStatus: "GST Invoice (30 Days)",
    jobStatus: "Completed",
    assignedTo: "Sunita Devi",
    scheduledDate: "Yesterday, 08:00 PM",
    hub: "C-Scheme",
    notes: "Post-closing nighttime maintenance. Signoff signed by manager."
  },
  {
    id: "BK-JPR-1086",
    customer: "Harshit Singhal",
    phone: "+91 96020 99118",
    address: "Sector 7, Malviya Nagar, Jaipur - 302017",
    service: "Eco Herbal Termite & Cockroach Pest Control",
    amount: 1499,
    paymentStatus: "Pending",
    jobStatus: "New",
    assignedTo: "Vikram Gurjar",
    scheduledDate: "Today, 04:00 PM",
    hub: "Malviya Nagar",
    notes: "Kitchen cabinets and wooden wardrobes inspection."
  }
];

export const INITIAL_CORPORATE_LEADS = [
  {
    id: "CORP-01",
    company: "Apex Tech Labs",
    contactPerson: "Naveen Mathur (Admin Head)",
    phone: "+91 98288 77100",
    spaceSize: "12,000 sq.ft Office Space",
    frequency: "Daily Night Shift Cleaning + Pantry Staff",
    estimatedValue: "₹45,000 / month",
    status: "Proposal Sent",
    location: "Sitapura Industrial Area, Jaipur"
  },
  {
    id: "CORP-02",
    company: "Fortis MedCentre Satellite",
    contactPerson: "Dr. Rekha Verma",
    phone: "+91 98299 44321",
    spaceSize: "4,500 sq.ft OPD Clinic",
    frequency: "Hospital-grade Daily Disinfection",
    estimatedValue: "₹28,000 / month",
    status: "Site Inspection Done",
    location: "Jawahar Nagar, Jaipur"
  },
  {
    id: "CORP-03",
    company: "Heritage Haveli Boutique Stay",
    contactPerson: "Bhawani Singh",
    phone: "+91 94144 00221",
    spaceSize: "8 Rooms Heritage Property",
    frequency: "Fortnightly Deep Steam Sanitization",
    estimatedValue: "₹18,500 / visit",
    status: "Negotiation",
    location: "Bani Park, Jaipur"
  }
];
