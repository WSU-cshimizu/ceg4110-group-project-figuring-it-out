"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import PageLayout from "@/app/components/pageLayout";
import { toast } from "react-toastify";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [error, setError] = useState("");

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch all equipments
  const fetchEquipments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/allEquipments"
      );
      setEquipments(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching equipments:", error);
      setError("Failed to fetch equipment data.");
    }
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      if (editIndex !== null) {
        // Include the equipment ID in the data
        const equipmentToEdit = equipments[editIndex];
        const updatedData = { ...data, id: equipmentToEdit._id };
  
        // Update existing equipment
        const response = await axios.post(
          "http://localhost:5000/api/admin/updateEquipment",
          updatedData
        );
  
        console.log("Update Response:", response);
        toast.success("Equipment updated successfully!");
        setEditIndex(null);
      } else {
        // Add new equipment
        const response = await axios.post(
          "http://localhost:5000/api/admin/addEquipment",
          data
        );
  
        console.log("Add Response:", response);
        toast.success("Equipment added successfully!");
      }
  
      // Refresh the equipment list
      await fetchEquipments();
  
      // Close modal and reset form
      setIsModalOpen(false);
      reset();
    } catch (error) {
      console.error("Form submission error:", error.response || error.message);
      toast.error("Failed to submit data. Please try again.");
      setError("Failed to submit data. Please try again.");
    }
  };
  
  // Handle edit action
  const handleEdit = (index) => {
    const equipment = equipments[index];
    setValue("name", equipment.name);
    setValue("equipmentID", equipment.equipmentID);
    setValue("itemCount", equipment.itemCount);
    setValue("description", equipment.description);
  
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // Handle delete action
  const handleDelete = (index) => {
    setDeleteIndex(index);
    setIsDeletePopupOpen(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      const deleteEquipment = equipments[deleteIndex];

      if (!deleteEquipment || !deleteEquipment._id) {
        throw new Error("Equipment ID is missing.");
      }

      // Send DELETE request with id as a query parameter
      const response = await axios.delete(
        `http://localhost:5000/api/admin/deleteEquipment`,
        {
          params: { id: deleteEquipment._id },
        }
      );
      if (response.data.success == true) {
        toast.success("Equipment Removed");
      }
      console.log(response, "response");

      // Refresh equipment list
      await fetchEquipments();

      setIsDeletePopupOpen(false);
      setDeleteIndex(null);
    } catch (error) {
      console.error(
        "Error deleting equipment:",
        error.response || error.message
      );
      setError("Failed to delete equipment.");
    }
  };

  return (
    <PageLayout>
      <div className="w-full flex p-8">
        <div className="flex gap-2 justify-center w-full">
          <div className="w-full flex flex-col gap-6 border rounded-lg">
            <div className="overflow-y-auto h-[70vh]">
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-lg">
                    Available Equipments
                  </h2>
                  <button
                    className="px-4 py-2 border rounded-lg bg-[#026937] text-white hover:cursor-pointer transition-all"
                    onClick={() => {
                      reset(); // Reset the form for adding new equipment
                      setIsModalOpen(true);
                    }}
                  >
                    Add Equipment
                  </button>
                </div>
              </div>
              <div className="px-4">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <table className="w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="w-1/4 px-4 py-2 text-left">
                        Equipment Name
                      </th>
                      <th className="w-1/4 px-4 py-2 text-left">
                        Equipment ID
                      </th>
                      <th className="w-1/4 px-4 py-2 text-left">Quantity</th>
                      <th className="w-1/4 px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipments.map((equipment, index) => (
                      <tr key={index}>
                        <td className="w-1/4 px-4 py-2">{equipment?.name}</td>
                        <td className="w-1/4 px-4 py-2">
                          {equipment?.equipmentID}
                        </td>
                        <td className="w-1/4 px-4 py-2">
                          {equipment?.itemCount}
                        </td>
                        <td className="w-1/4 px-4 py-2 flex gap-8">
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() => handleEdit(index)}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editIndex !== null ? "Edit Equipment" : "Add Equipment"}
            </h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Equipment Name"
                className="border px-4 py-2 rounded-lg w-full"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
              <input
                type="text"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Item Description"
                className="border px-4 py-2 rounded-lg w-full"
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
              <input
                type="text"
                {...register("equipmentID", {
                  required: "Equipment ID is required",
                })}
                placeholder="Equipment ID"
                className="border px-4 py-2 rounded-lg w-full"
              />
              {errors.equipmentID && (
                <span className="text-red-500">
                  {errors.equipmentID.message}
                </span>
              )}
              <input
                type="number"
                {...register("itemCount", { required: "Quantity is required" })}
                placeholder="Quantity"
                className="border px-4 py-2 rounded-lg w-full"
              />
              {errors.itemCount && (
                <span className="text-red-500">{errors.itemCount.message}</span>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#026937] text-white rounded-lg"
                >
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {isDeletePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this equipment?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setIsDeletePopupOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default Page;
