import { ipfs, json } from '@graphprotocol/graph-ts'
import {
  Transfer as TransferEvent,
  Token as TokenContract
} from '../generated/Token/Token'
import {
Token, User
} from '../generated/schema'

const ipfshash = "QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq"

export function handleTransfer(event: TransferEvent): void {
  /* load the token from the existing Graph Node */
  let token = Token.load(event.params.tokenId.toString())
  if (!token) {
    token = new Token(event.params.tokenId.toString())
    token.tokenID = event.params.tokenId
    token.tokenURI = "/" + event.params.tokenId.toString()
  
    /* combine the ipfs hash and the token ID to fetch the token metadata from IPFS */
    let metadata = ipfs.cat(ipfshash + token.tokenURI)
    if (metadata) {
      const value = json.fromBytes(metadata).toObject()
      if (value) {
        /* using the metatadata from IPFS, update the token object with the values  */
        const image = value.get('image')
        if (image) {
          token.image = image.toString()
          token.ipfsURI = 'ipfs.io/ipfs/' + ipfshash + token.tokenURI
        }
  
        const attributes = value.get('attributes')
        if (attributes) {
          const arr = attributes.toArray()
          for (let i = 0; i < arr.length; i++) {  
            const obj = arr[i].toObject()
            const traitType = obj.get('trait_type')
            const value = obj.get("value")
            if (traitType && value) {
              if (traitType.toString() == "Background") token.background = value.toString()
              if (traitType.toString() == "Clothes") token.clothes = value.toString()
              if (traitType.toString() == "Earring") token.earring = value.toString()
              if (traitType.toString() == "Eyes") token.eyes = value.toString()
              if (traitType.toString() == "Fur") token.fur = value.toString()
              if (traitType.toString() == "Hat") token.hat = value.toString()
              if (traitType.toString() == "Mouth") token.mouth = value.toString()
            }
          }
        }
      }
    }
  }

  token.updatedAtTimestamp = event.block.timestamp

  /* set or update the owner field and save the token to the Graph Node */
  token.owner = event.params.to.toHexString()
  token.save()
  
  /* if the user does not yet exist, create them */
  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.save()
  }
 }