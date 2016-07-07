using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Configuration;
using ADObase;
using DataAccess;

namespace PhoneCatalog.Controllers
{
    public class PhoneController : ApiController
    {
        PhoneRepository repo =  PhoneRepository.GetRepo((ConfigurationManager.ConnectionStrings["PhoneCatalog"].ConnectionString));

        // GET: api/Phone
        public IEnumerable<Phone> Get()
        {
            List<Phone> phones = new List<Phone>();
            phones = repo.GetPhones();
            return phones;
        }

        // GET: api/Phone/5
        public Phone Get(int id)
        {
            Phone phone = new Phone();
            phone = repo.GetPhone(id);
            return phone;
        }

        // POST: api/Phone
        public void Post([FromBody]Phone value)
        {
            repo.AddPhone(value);
        }

        // PUT: api/Phone
        public void Put([FromBody]Phone value)
        {
            repo.UpdatePhone(value);
        }

        // DELETE: api/Phone/5
        public void Delete(int id)
        {
            repo.DeletePhone(id);
        }
    }
}
