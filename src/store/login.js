import { defineStore } from "pinia";
import {ref} from "vue";


 


  const useLoginStore = defineStore('login', () => {
    const login = ref(false)
    
    
    function setLoginState() {
        login.value=!login.value
    }
  
    return { login, setLoginState }
  })

  
  
export default useLoginStore;