"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [formData, setFormData] = useState({
    equipmentId: "",
    description: "",
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.equipmentId || !formData.description) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset the form after submission
      setFormData({
        equipmentId: "",
        description: "",
        image: null,
      });

      toast.success("Damage report submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit the damage report.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-600">Report Damage</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="equipmentId" className="block text-sm font-medium text-gray-700">
              Equipment ID
            </label>
            <input
              type="text"
              name="equipmentId"
              id="equipmentId"
              value={formData.equipmentId}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter Equipment ID"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Damage Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm resize-none"
              placeholder="Describe the damage..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded-md shadow-sm ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Damage Report"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;
