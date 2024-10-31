import { createThirdwebClient } from "thirdweb";


const clientId = '29f19124888f01d6e964aee5a0d211f1'

if (!clientId) {
  throw new Error('No client ID provided')
}

export const client = createThirdwebClient({
  clientId: clientId,
})
