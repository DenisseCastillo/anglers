app.factory('survey', function ($resource,resourceInterceptor,Variables) {
	return $resource('http://'+ Variables.IpServidor+'/WSSurveys.svc/surveys/:item',{item: "@item"},
										{
											'get':    {method:'GET',interceptor: resourceInterceptor},
											'save':   {method:'POST',interceptor: resourceInterceptor},
											'query':  {method:'GET', isArray:true,interceptor: resourceInterceptor,url:'http://'+ Variables.IpServidor+'/WSSurveys.svc/surveys?method=:method',param:{method:"@method"}},
											'remove': {method:'DELETE',interceptor: resourceInterceptor},
											'delete': {method:'DELETE',interceptor: resourceInterceptor}
										}
									);
});