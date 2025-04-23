import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET || 'secret123';

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});


// 👤 Signup
app.post('/auth/signup', async (req, res) => {
    const { name, email, password, role } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const result = await pool.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
        [name, email, hashedPassword, role]
      );
  
      const user = result.rows[0];
      const token = jwt.sign({ userId: user.id, role: user.role }, jwtSecret, { expiresIn: '1h' });
  
      res.status(201).json({ user, token });
    } catch (err) {
      console.error('Signup error:', err);
      res.status(500).json({ error: 'Signup failed' });
    }
  });
  
  // 🔑 Login
  app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
      if (result.rows.length === 0) {
         res.status(401).json({ error: 'Invalid credentials' });
         return
      }
  
      const user = result.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        res.status(401).json({ error: 'Invalid credentials' });
        return
      }
  
      const token = jwt.sign({ userId: user.id, role: user.role }, jwtSecret, { expiresIn: '1h' });
  
      // Don't return password!
      delete user.password;
  
      res.json({ user, token });
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).json({ error: 'Login failed' });
    }
  });
// 🟢 CREATE: Add a new user
app.post('/users', async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (full_name, email, role) VALUES ($1, $2, $3) RETURNING *',
      [name, email, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// 🟡 READ: Get all users
app.get('/users', async (_req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// 🔵 READ: Get user by ID
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0) {
       res.status(404).json({ error: 'User not found' });
       return
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// 🟠 UPDATE: Update user by ID
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING *',
      [name, email, role, id]
    );

    if (result.rows.length === 0) {
       res.status(404).json({ error: 'User not found' });
       return
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// 🔴 DELETE: Delete user by ID
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
       res.status(404).json({ error: 'User not found' });
       return
    }

    res.json({ message: 'User deleted', user: result.rows[0] });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Root
app.get('/', (_req, res) => {
  res.send('🚀 SkillMatch Backend is up and running!');
});

app.listen(port, () => {
  console.log(`✅ Server listening on http://localhost:${port}`);
});
