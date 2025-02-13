"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Sidebar from '@/app/dashboardComponents/sidebar';
import { useRouter } from 'next/navigation';

interface TeacherFormData {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  qualification: string;
  department: string;
  subject: string;
  yearsOfExperience: number;
  salary: number;
  joiningDate: string;
  employeeId: string;
}

const AddTeacherForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<TeacherFormData>({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    qualification: '',
    department: '',
    subject: '',
    yearsOfExperience: 0,
    salary: 0,
    joiningDate: '',
    employeeId: ''
  });

  const [errors, setErrors] = useState<Partial<TeacherFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<TeacherFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.qualification) newErrors.qualification = 'Qualification is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.joiningDate) newErrors.joiningDate = 'Joining date is required';
    if (!formData.employeeId) newErrors.employeeId = 'Employee ID is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      router.push('/teacher');
    }
  };

  const handleCancel = () => {
    router.push('/teacher');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof TeacherFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Add New Teacher</h1>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-lg p-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender*
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Qualification*
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.qualification ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Department*
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.department ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  >
                    <option value="">Select Department</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                    <option value="computer_science">Computer Science</option>
                  </select>
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    min="0"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Monthly Salary
                  </label>
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    min="0"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Joining Date*
                  </label>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.joiningDate ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.joiningDate && <p className="text-red-500 text-sm mt-1">{errors.joiningDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Employee ID*
                  </label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.employeeId ? 'border-red-500' : 'border-gray-300'
                    } px-3 py-2 focus:border-blue-500 focus:outline-none`}
                  />
                  {errors.employeeId && <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>}
                </div>
              </div>
            </div>

            {/* Add Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Register Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacherForm;