using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyAngular.Models
{
    public class SomeDataRepo
    {
        private static SomeDataRepo repository = new SomeDataRepo();

        public static SomeDataRepo Current
        {
            get
            {
                return repository;
            }
        }

        private List<SomeData> data = new List<SomeData> 
        {
            new SomeData
            {
                Id = 1, SomeString = "qwe", SomeValue = 5
            },
            new SomeData
            {
                Id = 2, SomeString = "asd", SomeValue = 10
            }
        };

        public IEnumerable<SomeData> GetAll()
        {
            return data;
        }
    }
}