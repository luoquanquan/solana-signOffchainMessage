import Solana from '@ledgerhq/hw-app-solana'
import WebHID from '@ledgerhq/hw-transport-webhid'
console.log('Current log: navigator.hid: ', navigator.hid)

let transport = null
document.getElementById('signOffchainMessage').onclick = async () => {
  if (!transport) {
    transport = await WebHID.create()
  }
  const solanaApp = new Solana(transport)
  // this is your demo string, it can be signed with solana app
  const message = Buffer.from(
    'ff736f6c616e61206f6666636861696e00001c004c6f6e67204f66662d436861696e2054657374204d6573736167652e',
    'hex'
  )
  const { signature } = await solanaApp.signOffchainMessage("44'/501'", message)
  console.log('Current log: signature: ', signature.toString('hex'))

  // if i want to sign a raw string like hello world
  const msg = 'hello world'

  // how can i get the target hexMsg like yours
  const hexMsg = Buffer.from(msg)

  // that will be error
  const { signature: mySignature } = await solanaApp.signOffchainMessage("44'/501'", hexMsg)
  console.log('Current log: mySignature: ', mySignature)
}
