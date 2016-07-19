using DataAccess;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace PhoneCatalog
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            container.RegisterType(typeof(IRepository), typeof(PhoneRepository));

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}