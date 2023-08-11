module.exports = {
  port: 1337,
  dbUrl:
    'mongodb://mrgoblin:helloworld@ac-zd8rcni-shard-00-00.k8g5kc7.mongodb.net:27017,ac-zd8rcni-shard-00-01.k8g5kc7.mongodb.net:27017,ac-zd8rcni-shard-00-02.k8g5kc7.mongodb.net:27017/?ssl=true&replicaSet=atlas-ql8ldb-shard-0&authSource=admin&retryWrites=true&w=majority',
  saltRounds: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJ1z/HF0ULSgVZWywOp9wfUXt4
  lSbDeQ2/oB17sWIbptjjivTeYdZifpTyusOdXarQ9HdRKKklgtVvDUSIEJMKwad8
  AsSxRzrZCcP2TyvLNi1WpNHYrKlvKjG481D8yJolNw9UZwJSjyJunzgzEabT6vqB
  LydytHwm5Tx3d9IpywIDAQAB
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXgIBAAKBgQDJ1z/HF0ULSgVZWywOp9wfUXt4lSbDeQ2/oB17sWIbptjjivTe
  YdZifpTyusOdXarQ9HdRKKklgtVvDUSIEJMKwad8AsSxRzrZCcP2TyvLNi1WpNHY
  rKlvKjG481D8yJolNw9UZwJSjyJunzgzEabT6vqBLydytHwm5Tx3d9IpywIDAQAB
  AoGAQSf/KqHUZASNHX9VBZYidOm01gQv80IMsiNZ4Sgt54dA1JNy4Kbssfby1jh8
  FTy7e6CvM7/Qeo91ntfFm7beADQornosm8spgWF6YeSNbgNZmKrQnczGrZIupbnY
  CqfHLYm4DaUjdYugdTU20ffmH3zSN0PTrdChYmJCtpmRJiECQQDkGtwWgC4j6NJz
  xuf96OW1fbTUn0kSf6wqlwU5qGqyos5NJ96pn1sD03vIUqU9UJ79ZNSWjw7BtrD/
  UskvWUztAkEA4oYnwPVmJdJVchOq3Q40JaVe3iuVZMUCDmmr7S+Cpcu2i74JA4Ib
  CL43Kc9AHFu7Zw3OyrRY3EYgOvFFAS2ylwJBAJ8wo5JMaGcFMAI+uV75L36muRF+
  DHgNg/DBLpNblwMOHd24ymskXFdiO0vFaa5N2ndK7BYaxpioUAQQGXmi380CQQCy
  nU3jXJy63er6FH/55iVAOfFgBcW6u40viCtEzt2ZldPOxH2fAowGjNY6ZW0L71kJ
  nV2dgC9BIRpw36WllD7pAkEAzBBQiuXWrV4D3OHJvKY+j2V22s0IpWm2g1eyWs4L
  l6A9bURq5ygwADVqgULVid+qIKg+nXehzx5nDFtVdRlJ8w==
  -----END RSA PRIVATE KEY-----`,
}
