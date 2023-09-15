import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(({command, mode}) => {
  
  //Cargar varibles de entorno.
  // eslint-disable-next-line no-undef
  loadEnv(mode, process.cwd())
 
  if(mode === 'build'){
    console.log('Mode Production');
  }else if(mode === 'development'){
    console.log('Mode Development');
  }else{
    console.log('Mode Preview');
  }

  return {
    plugins: [react()], 
    base: '/PolarisMovies_ER-145/'
  }
})
