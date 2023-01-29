rm db.sqlite3
python3 -m manage migrate
python3 -m manage loaddata ../dump.json
