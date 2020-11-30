module.exports = (sequelize, Sequelize) => {

	const User = sequelize.define('users', {
	  firstname: {
		  type: Sequelize.STRING
		},
		lastname: {
		  type: Sequelize.STRING
	  },
	  username: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
	  }
	});
	
	User.prototype.toJSON =  function () {
		var values = Object.assign({}, this.get());
	
		delete values.password;
		return values;
	}
	
	return User;
}