INSERT INTO users (username)
VALUES 
('demo_user');

INSERT INTO artists (name, genre)
VALUES
('SZA', 'R&B'),
('Kendrick Lamar', 'Hip-Hop'),
('Daft Punk', 'Electronic'),
('Paramore', 'Rock');

INSERT INTO tracks (artist_id, title, genre, duration_seconds, release_year)
VALUES
(1, 'Good Days', 'R&B', 279, 2020),
(2, 'Money Trees', 'Hip-Hop', 386, 2012),
(3, 'Digital Love', 'Electronic', 301, 2001),
(4, 'Still Into You', 'Rock', 216, 2013);