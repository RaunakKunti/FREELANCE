import React, { useEffect, useState } from "react";
import { useAuth } from "../../Store/Auth";

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { AuthorizationToken, API } = useAuth();

  const getAllContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/contact`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact", data);

      setContacts(data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  const deleteContact = async (contactId) => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/contact/delete/${contactId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      // const data = await response.json();
      // console.log("Deleted contact:", data);
      if (response.ok) {
        getAllContactsData(); // refresh after delete
      }
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  return (
    <div className="mt-20 px-4">
      <h2 className="text-2xl font-bold mb-4">Contact Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id} className="text-center hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{contact.name}</td>
                  <td className="py-2 px-4 border-b">{contact.email}</td>
                  <td className="py-2 px-4 border-b">{contact.message}</td>

                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => deleteContact(contact._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
