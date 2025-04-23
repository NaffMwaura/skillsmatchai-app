import express from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../db'; // Your DB connection
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { fullName, email, password, role } = req.body;

  try {
    // 1. Check if user already exists
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
       res.status(400).json({ message: 'User already exists' });
       return
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Insert user into database
    const newUser = await pool.query(
      'INSERT INTO users (full_name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [fullName, email, hashedPassword, role]
    );

    // 4. Generate JWT
    const token = jwt.sign({ id: newUser.rows[0].id, role }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // 5. Send response
    res.status(201).json({ user: newUser.rows[0], token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
