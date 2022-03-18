// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("ipfsURI", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("background", Value.fromString(""));
    this.set("clothes", Value.fromString(""));
    this.set("earring", Value.fromString(""));
    this.set("eyes", Value.fromString(""));
    this.set("fur", Value.fromString(""));
    this.set("hat", Value.fromString(""));
    this.set("mouth", Value.fromString(""));
    this.set("updatedAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get ipfsURI(): string {
    let value = this.get("ipfsURI");
    return value!.toString();
  }

  set ipfsURI(value: string) {
    this.set("ipfsURI", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get background(): string {
    let value = this.get("background");
    return value!.toString();
  }

  set background(value: string) {
    this.set("background", Value.fromString(value));
  }

  get clothes(): string {
    let value = this.get("clothes");
    return value!.toString();
  }

  set clothes(value: string) {
    this.set("clothes", Value.fromString(value));
  }

  get earring(): string {
    let value = this.get("earring");
    return value!.toString();
  }

  set earring(value: string) {
    this.set("earring", Value.fromString(value));
  }

  get eyes(): string {
    let value = this.get("eyes");
    return value!.toString();
  }

  set eyes(value: string) {
    this.set("eyes", Value.fromString(value));
  }

  get fur(): string {
    let value = this.get("fur");
    return value!.toString();
  }

  set fur(value: string) {
    this.set("fur", Value.fromString(value));
  }

  get hat(): string {
    let value = this.get("hat");
    return value!.toString();
  }

  set hat(value: string) {
    this.set("hat", Value.fromString(value));
  }

  get mouth(): string {
    let value = this.get("mouth");
    return value!.toString();
  }

  set mouth(value: string) {
    this.set("mouth", Value.fromString(value));
  }

  get updatedAtTimestamp(): BigInt {
    let value = this.get("updatedAtTimestamp");
    return value!.toBigInt();
  }

  set updatedAtTimestamp(value: BigInt) {
    this.set("updatedAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}
