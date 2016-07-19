using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ADObase;
namespace DataAccess
{
   public interface IRepository
    {
        string connectionString { get; set; }
        List<Phone> GetPhones();
        Phone GetPhone(int id);
        void UpdatePhone(Phone phone);
        void AddPhone(Phone phone);
        void DeletePhone(int id);
    }
}
