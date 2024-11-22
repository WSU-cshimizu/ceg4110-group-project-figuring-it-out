"use client";
import { useState } from "react";
import PageLayout from "@/app/components/pageLayout";

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [formData, setFormData] = useState({ name: "", id: "", quantity: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit (Add or Edit)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.id && formData.quantity) {
      if (editIndex !== null) {
        // Update existing equipment
        setEquipments((prev) => {
          const updated = [...prev];
          updated[editIndex] = formData;
          return updated;
        });
        setEditIndex(null); // Reset edit index
      } else {
        // Add new equipment
        setEquipments((prev) => [...prev, formData]);
      }
      setFormData({ name: "", id: "", quantity: "" });
      setIsModalOpen(false);
    }
  };

  // Handle edit action
  const handleEdit = (index) => {
    setFormData(equipments[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // Handle delete action
  const handleDelete = (index) => {
    setDeleteIndex(index);
    setIsDeletePopupOpen(true);
  };

  // Confirm delete
  const confirmDelete = () => {
    setEquipments((prev) => prev.filter((_, i) => i !== deleteIndex));
    setIsDeletePopupOpen(false);
    setDeleteIndex(null);
  };

  return (
    <PageLayout>
      <div className="w-full flex p-8">
        <div className="flex gap-2 justify-center w-full">
          <div className="w-full flex flex-col gap-6 border rounded-lg">
            <div className="overflow-y-auto h-[70vh]">
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-lg">Available Equipments</h2>
                  <button
                    className="px-4 py-2 border rounded-lg bg-[#026937] text-white hover:cursor-pointer transition-all transition-2s"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add Equipments
                  </button>
                </div>
              </div>
              <div className="px-4">
                <table className="w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="w-1/4 px-4 py-2 text-left">Equipment Name</th>
                      <th className="w-1/4 px-4 py-2 text-left">Equipment ID</th>
                      <th className="w-1/4 px-4 py-2 text-left">Quantity</th>
                      <th className="w-1/4 px-4 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipments.map((equipment, index) => (
                      <tr key={index}>
                        <td className="w-1/4 px-4 py-2">{equipment.name}</td>
                        <td className="w-1/4 px-4 py-2">{equipment.id}</td>
                        <td className="w-1/4 px-4 py-2">{equipment.quantity}</td>
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
            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Equipment Name"
                className="border px-4 py-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="Equipment ID"
                className="border px-4 py-2 rounded-lg w-full"
                required
              />
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="border px-4 py-2 rounded-lg w-full"
                required
              />
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
                  {editIndex !== null ? "Done" : "Add"}
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
