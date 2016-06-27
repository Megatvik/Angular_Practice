using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;

namespace ADObase
{
    static class PhoneRepository
    {
        private static string connectionString = ConfigurationManager.ConnectionStrings["PhoneCatalog"].ConnectionString;

        public static List<Phone> GetAllPhones()
        {
            List<Phone> phones = new List<Phone>();

            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;
                try
                {
                    cn.Open();
                    string strSQL = "SELECT * FROM Phone";
                    SqlCommand myCommand = new SqlCommand(strSQL, cn);
                    SqlDataReader dr = myCommand.ExecuteReader();
                    while (dr.Read())
                    {
                        Phone phone = new Phone();
                        phone.Id = (int)dr[0];
                        phone.Name = (string)dr[1];
                        phone.Brand = (string)dr[2];
                        phone.ReleaseYear = (int)dr[3];
                        phones.Add(phone);
                    }
                }
                catch (SqlException error) { phones.Add(new Phone { Name = error.Message }); }
            }
            return phones;
        }

        public static Phone GetPhone(int id)
        {
            Phone phone = new Phone();
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;
                try
                {
                    cn.Open();
                    string strSQL = "SELECT * FROM Phone where Id = @id";
                    SqlCommand myCommand = new SqlCommand(strSQL, cn);
                    myCommand.Parameters.AddWithValue("@id", id);
                    SqlDataReader dr = myCommand.ExecuteReader();
                    while (dr.Read())
                    {
                        phone.Id = (int)dr[0];
                        phone.Name = (string)dr[1];
                        phone.Brand = (string)dr[2];
                        phone.ReleaseYear = (int)dr[3];
                    }
                }
                catch (SqlException error) { phone = new Phone { Name = error.Message }; }
            }
            return phone;
        }

        public static void UpdatePhone(Phone phone, int id)
        {
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;
                try
                {
                    cn.Open();
                    string strSQL = @"UPDATE Phone
                                      SET [Name] = @name
                                         ,[Brand] = @brand
                                         ,[ReleaseYear] = @year
                                      WHERE [Id] = @id";
                    SqlCommand myCommand = new SqlCommand(strSQL, cn);
                    myCommand.Parameters.AddWithValue("@id", id);
                    myCommand.Parameters.AddWithValue("@name", phone.Name);
                    myCommand.Parameters.AddWithValue("@brand", phone.Brand);
                    myCommand.Parameters.AddWithValue("@year", phone.ReleaseYear);
                    myCommand.ExecuteNonQuery();
                }
                catch (SqlException error) { }
            }
        }

        public static void AddPhone(Phone phone)
        {
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;
                try
                {
                    cn.Open();
                    string strSQL = @"INSERT INTO Phone (Name, Brand, ReleaseYear) 
                                      VALUES (@name,@brand,@year)";
                    SqlCommand myCommand = new SqlCommand(strSQL, cn);
                    //myCommand.Parameters.AddWithValue("@id", phone.Id);
                    myCommand.Parameters.AddWithValue("@name", phone.Name);
                    myCommand.Parameters.AddWithValue("@brand", phone.Brand);
                    myCommand.Parameters.AddWithValue("@year", phone.ReleaseYear);
                    myCommand.ExecuteNonQuery();
                }
                catch (SqlException error) { }
            }
        }

        public static void DeletePhone(int id)
        {
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;
                try
                {
                    cn.Open();
                    string strSQL = @"DELETE FROM Phone WHERE Id = @id";
                    SqlCommand myCommand = new SqlCommand(strSQL, cn);
                    myCommand.Parameters.AddWithValue("@id", id);
                    myCommand.ExecuteNonQuery();
                }
                catch (SqlException error) { }
            }
        }
    }
}
