const verifyAdmin = (req, res, next) => {
    if (req.headers['x-user-role'] === 'admin') next();
    else res.status(403).json({ message: "Akses Ditolak. Khusus Admin." });
};

const verifyUser = (req, res, next) => {
    const role = req.headers['x-user-role'];
    const userId = req.headers['x-user-id'];
    
    if (role === 'user' && userId) {
        req.userId = userId;
        next();
    } else {
        res.status(403).json({ message: "Akses Ditolak. Butuh role user dan ID." });
    }
};

module.exports = { verifyAdmin, verifyUser };