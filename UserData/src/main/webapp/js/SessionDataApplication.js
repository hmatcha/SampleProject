var userApp = angular.module('userApp', []);
userApp.controller('userLoginController', [ '$scope', '$window', '$http',
		function($scope, $window, $http) {
			$scope.loginDetails = {};
			$scope.login = function() {
				$http({
					method : "POST",
					url : "/UserData/login",
					data : $scope.loginDetails
				}).success(function(status) {
					window.location.href = "sessionDataById.html";
				}).error(function(data, status, headers, config) {
					if (status == 400) {

						$scope.messages = data;

					} else {

						alert('Unexpected server error.');

					}

				});

			};
		} ]);

userApp.controller('addUserController', [ '$scope', '$window', '$http',
		function($scope, $window, $http) {
			$scope.user = {};
			$scope.submit = function() {
				$http({
					method : "POST",
					url : "/UserData/signup",
					data : $scope.user
				}).success(function(data, status, headers, config) {
					window.location.href = "login.html";
				}).error(function(data, status, headers, config) {
					if (status == 400) {

						$scope.messages = data;

					} else {

						alert('Unexpected server error.');

					}

				});
			};

		} ]);

var sessionDataById = [];
$(document)
		.ready(
				function() {
					jQuery('#lTable').toggle('hide');
					$('#submit')
							.on(
									'click',
									function() {
										jQuery('#content').toggle('hide');
										jQuery('#lTable').toggle('show');
										var sessionData = JSON.stringify($(
												document.sessionDataForm)
												.serializeObject());
										console.log("After submit click "
												+ sessionData);

										$
												.ajax(
														{
															type : 'POST',
															url : '/UserData/sessionDataById',
															data : sessionData,
															contentType : "application/json",
															dataType : 'json',
														})
												.done(
														function(data) {
															sessionDataById = (data);
															console
																	.log("data ="
																			+ data);

															console
																	.log("SessionData returned by Server = "
																			+ sessionDataById);
															$("#Table")
																	.append(
																			"<tr>"
																					+ "<td>"
																					+ (sessionDataById.id)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.vin)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.timestamp)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.model)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.year)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.exit_code)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.last_session_id)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.yb_id)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.body)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.arch)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.category)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.engine_name)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.odometer)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.svr_time)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.tool_sn)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.tool_ip)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.dealer_code)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.users)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_boot_time)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_resolve_time)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_dm_time)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_session_time)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_link)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_platform)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_os_vsn)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.pod_app_vsn)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.svr_vsn)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.db_date)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.tool_svr_inst)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.tool_svr_log)
																					+ "</td>"
																					+ "<td>"
																					+ (sessionDataById.last_update)
																					+ "</td>"
																					+ "</tr>");
														});

									}).fail(function(status) {
								console.log("got error");
							});
				});

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
