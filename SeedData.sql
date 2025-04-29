USE CalculatorDb;

INSERT INTO Users (Username, Email, PasswordHash, CreatedAt)
VALUES 
('testuser', 'testuser@example.com', 'test', GETDATE()),
('admin', 'admin@example.com', 'admin', GETDATE());

INSERT INTO CalculationHistory (UserId, Expression, Result, CreatedAt)
VALUES 
(1, '2+2', '4', GETDATE()),
(1, '5*3', '15', GETDATE());
