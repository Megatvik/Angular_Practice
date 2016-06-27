using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Configuration;
using ADObase;

namespace PhoneCatalog.Controllers
{
    public class PhoneController : ApiController
    {
        // GET: api/Phone
        public IEnumerable<Phone> Get()
        {
            List<Phone> phones = new List<Phone>();
            try
            {
                phones = PhoneRepository.GetAllPhones();

            }
            catch (Exception err) { phones.Add(new Phone { Name = err.Message }); }
            return phones;
        }

        // GET: api/Phone/5
        public Phone Get(int id)
        {
            Phone phone = new Phone();
            try
            {
                phone = PhoneRepository.GetPhone(id);
            }
            catch (Exception err) { phone = new Phone { Name = err.Message }; }
            return phone;
        }

        // POST: api/Phone
        public void Post([FromBody]Phone value)
        {
            PhoneRepository.AddPhone(value);
        }

        // PUT: api/Phone/5
        public void Put(int id, [FromBody]Phone value)
        {
            PhoneRepository.UpdatePhone(value, id);
        }

        // DELETE: api/Phone/5
        public void Delete(int id)
        {
            PhoneRepository.DeletePhone(id);
        }
    }
}
