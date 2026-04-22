from sqlalchemy import Table, Column, Integer, String, MetaData

metadata_object = MetaData()

users_table = Table(
    "users",
    metadata_object,
    Column("id", Integer, primary_key=True),
    Column("username", String),
    Column("email", String)
)