import { useEffect, useState } from 'react';
import axios from 'axios';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('https://beckend-n14.vercel.app/users/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        }
      } catch (error) {
        alert('Xatolik yuz berdi!');
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Foydalanuvchi ma'lumotlari yuklanmoqda...</p>;

  return (
    <div>
      <h2>Foydalanuvchi ma'lumotlari</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Account;
