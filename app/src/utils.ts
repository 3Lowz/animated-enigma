/*************************************************************
 *  LOGS
 *************************************************************/
export const logAndThrowError = (err) => {
  console.error(err.message)
  throw err
}
