export const validateName = (name: string) => {
  if (name.length < 3) {
    throw new Error("nome menor que 3 caracteres");
    
  }
}