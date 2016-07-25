/**
 * Created by Pradhany on 7/5/2016.
 */

app.controller('registerController', function registerController($scope, $http) {
    console.log("registerController initiated");

    $scope.doRegister = function () {
        console.log("doRegistration initiated");

        var name = $scope.fullname;
        var email = $scope.email;
        var phone = $scope.phone;
        var occupation = $scope.occupation;

        //console.log(name + "|" + email + "|" + phone + "|" + occupation);

        var headers = {
            headers : {
                'Content-Type': 'application/json;'
            }
        };

        var body = {
            opRegisterRq : {
                name : name,
                email : email,
                phone : phone,
                occupation : occupation
            }
        };

        $http.post('http://localhost:8181/AccountServices/opRegister', body, headers)
            .success(function(data) {
                var responseStatus = data.opRegisterRs.status;

                if (responseStatus == 'success') {
                    $scope.responseNotif = 'Registrasi Berhasil, Silakan Cek di '+email;
                } else {
                    $scope.responseNotif = 'Registrasi Gagal';
                }
            })
            .error(function() {
                $scope.responseNotif = 'Koneksi Gagal';
            });

    };
});