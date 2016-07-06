using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;
using ADObase;

namespace DataAccess
{
    public class PhoneRepository
    {

        #region SQL Statements
        const string sqlSelect = "SELECT * FROM Phone";

        const string sqlSelectUnique = "SELECT * FROM Phone where Id = @id";

        const string sqlUpdate = @"UPDATE Phone
                                      SET [Name] = @name
                                         ,[Brand] = @brand
                                         ,[ReleaseYear] = @year
                                         ,[Description] = @desc
                                         ,[Image] = @img
                                      WHERE [Id] = @id";

        const string sqlInsert = @"INSERT INTO Phone (Name, Brand, ReleaseYear, Description, Image) 
                                      VALUES (@name,@brand,@year,@desc,@img)";

        const string sqlDelete = @"DELETE FROM Phone WHERE Id = @id";

        #endregion

        private string connectionString;

        public PhoneRepository(string connectionString)
        {
            this.connectionString = connectionString;
        }

        private T getElement<T>(object item)
        {
            if (item == DBNull.Value) return default(T);
            return (T)item;
        }

        public List<Phone> GetPhones()
        {
            List<Phone> phones = new List<Phone>();

            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;

                cn.Open();
                SqlCommand myCommand = new SqlCommand(sqlSelect, cn);
                SqlDataReader dr = myCommand.ExecuteReader();
                while (dr.Read())
                {
                    Phone phone = new Phone();
                    phone.Id = (int)dr[0];
                    phone.Name = (string)dr[1];
                    phone.Brand = (string)dr[2];
                    phone.ReleaseYear = (int)dr[3];
                    phone.Description = getElement<string>(dr[4]);
                    phone.Image = getElement<string>(dr[5]);
                    phones.Add(phone);
                }
            }
            return phones;
        }

        public Phone GetPhone(int id)
        {
            Phone phone = new Phone();
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;

                cn.Open();
                SqlCommand myCommand = new SqlCommand(sqlSelectUnique, cn);
                myCommand.Parameters.AddWithValue("@id", id);
                SqlDataReader dr = myCommand.ExecuteReader();
                while (dr.Read())
                {
                    phone.Id = (int)dr[0];
                    phone.Name = (string)dr[1];
                    phone.Brand = (string)dr[2];
                    phone.ReleaseYear = (int)dr[3];
                    phone.Description = getElement<string>(dr[4]);
                    phone.Image = getElement<string>(dr[5]);
                }
            }
            return phone;
        }

        public void UpdatePhone(Phone phone)
        {
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;
                cn.Open();
                SqlCommand myCommand = new SqlCommand(sqlUpdate, cn);
                myCommand.Parameters.AddWithValue("@id", phone.Id);
                myCommand.Parameters.AddWithValue("@name", phone.Name);
                myCommand.Parameters.AddWithValue("@brand", phone.Brand);
                myCommand.Parameters.AddWithValue("@year", phone.ReleaseYear);
                if (phone.Description == null)
                {
                    myCommand.Parameters.AddWithValue("@desc", DBNull.Value);
                }
                else
                {
                    myCommand.Parameters.AddWithValue("@desc", phone.Description);
                }
                if (phone.Image == null)
                {
                    myCommand.Parameters.AddWithValue("@img", DBNull.Value);
                }
                else
                {
                    myCommand.Parameters.AddWithValue("@img", phone.Image);
                }
                myCommand.ExecuteNonQuery();
            }
        }

        public void AddPhone(Phone phone)
        {
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;

                cn.Open();

                SqlCommand myCommand = new SqlCommand(sqlInsert, cn);
                myCommand.Parameters.AddWithValue("@name", phone.Name);
                myCommand.Parameters.AddWithValue("@brand", phone.Brand);
                myCommand.Parameters.AddWithValue("@year", phone.ReleaseYear);
                if (phone.Description == null)
                {
                    myCommand.Parameters.AddWithValue("@desc", DBNull.Value);
                }
                else
                {
                    myCommand.Parameters.AddWithValue("@desc", phone.Description);
                }
                if (phone.Image == null)
                {
                    myCommand.Parameters.AddWithValue("@img", DBNull.Value);
                }
                else
                {
                    myCommand.Parameters.AddWithValue("@img", phone.Image);
                }
                myCommand.ExecuteNonQuery();
            }
        }

        public void DeletePhone(int id)
        {
            using (SqlConnection cn = new SqlConnection())
            {
                cn.ConnectionString = connectionString;

                cn.Open();
                SqlCommand myCommand = new SqlCommand(sqlDelete, cn);
                myCommand.Parameters.AddWithValue("@id", id);
                myCommand.ExecuteNonQuery();
            }
        }
    }
}
