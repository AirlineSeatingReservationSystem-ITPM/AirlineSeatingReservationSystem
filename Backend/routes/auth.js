const router = require('express').Router();
const { register , login , forgotPassword , resetpassword, displayUsers, editUser , getUserById , deleteUserById, loginStaffUserM, registerStaffUserM, loginStaffFlightM, registerStaffFlightM } = require("../controllers/auth");
 
router.route("/register").post(register); // call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/displayUsers").get(displayUsers);

router.route("/editUser/:id").put(editUser);

router.route("/getUserById/:id").get(getUserById);

router.route("/deleteUserById/:id").delete(deleteUserById);

//--------------------------Staff Routes------------------------------------------

router.route("/staff-login-userM").post(loginStaffUserM);

router.route("/staff-register-userM").post( registerStaffUserM);

router.route("/staff-login-flightM").post(loginStaffFlightM);
router.route("/staff-register-flightM").post(registerStaffFlightM);

module.exports = router;



