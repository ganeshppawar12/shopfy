import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("all");

    async function fetchAllUsers() {
        try {
            const res = await fetch("https://randomuser.me/api/?results=20");
            const data = await res.json();
            setUsers(data.results);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    // Filter users based on gender selection
    const filteredUsers = users.filter(user => {
        if (filter === "all") return true;
        return user.gender === filter;
    });

    return (
        <div className="p-4">
            {/* User Details Section */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">User Details</h1>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur, 
                    blanditiis, facere consequuntur doloremque ea delectus commodi alias explicabo.
                </p>
            </div>

            {/* Gender Filter */}
            <div className="flex items-center gap-6 mb-4">
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="all"
                        checked={filter === "all"}
                        onChange={() => setFilter("all")}
                        className="mr-1"
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={filter === "male"}
                        onChange={() => setFilter("male")}
                        className="mr-1"
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={filter === "female"}
                        onChange={() => setFilter("female")}
                        className="mr-1"
                    />
                    Female
                </label>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="bg-slate-800 text-white text-left">
                        <tr>
                            <th className="px-4 py-2">IMAGE</th>
                            <th className="px-4 py-2">NAME</th>
                            <th className="px-4 py-2">EMAIL</th>
                            <th className="px-4 py-2">GENDER</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {filteredUsers.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">
                                    <img
                                        src={item.picture.thumbnail}
                                        alt="User"
                                        className="w-10 h-10 rounded-full mx-auto"
                                    />
                                </td>
                                <td className="px-4 py-2">{item.name.first}</td>
                                <td className="px-4 py-2">{item.email}</td>
                                <td className="px-4 py-2 capitalize">{item.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
