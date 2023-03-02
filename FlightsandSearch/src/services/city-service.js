const {CityRepository}=require("../repository/index")

class CityService{
    constructor(){
        this.cityRepository=new CityRepository;
    }

    async createCity(data){
        try {
<<<<<<< HEAD
            const city=this.cityRepository.createCity(data);
=======
            const city=await this.cityRepository.createCity(data);
>>>>>>> 97792ab (created service layer)
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
<<<<<<< HEAD
            const city=this.cityRepository.updateCity(cityId,data);
=======
            const city= await this.cityRepository.updateCity(cityId,data);
>>>>>>> 97792ab (created service layer)
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
<<<<<<< HEAD
            const city=this.cityRepository.createCity(cityId);
=======
            const city=await this.cityRepository.createCity(cityId);
>>>>>>> 97792ab (created service layer)
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
<<<<<<< HEAD
            const city=this.cityRepository.createCity(cityId);
=======
            const city=await this.cityRepository.createCity(cityId);
>>>>>>> 97792ab (created service layer)
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}