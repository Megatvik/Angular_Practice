using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyAngular.Models;
namespace MyAngular.Controllers
{
    public class IndexController : ApiController
    {
        private SomeDataRepo repo = SomeDataRepo.Current;

        public IEnumerable<SomeData> GetAllSomeData()
        {
            return repo.GetAll();
        }

    }
}
