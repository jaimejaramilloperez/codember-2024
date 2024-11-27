/**
 * @param {number[][]} network
 * @returns {string}
 */
export function getSafeNodes (network) {
  const sortedNetwork = network.toSorted((a, b) => a[0] - b[0])
  const subnets = []

  for (const [nodeX, nodeY] of sortedNetwork) {
    if (subnets.length === 0) {
      subnets.push([nodeX, nodeY])
      continue
    }

    for (let i = 0; i < subnets.length; i++) {
      const subnet = subnets[i]
      const firstValueInSubnet = subnet.at(0)
      const lastValueInSubnet = subnet.at(-1)

      if (nodeX >= firstValueInSubnet && nodeX <= lastValueInSubnet) {
        subnet.push(nodeY)
        break
      } else if (i === subnets.length - 1) {
        subnets.push([nodeX, nodeY])
        break
      }
    }
  }

  const safeNodes = subnets.filter((subnet) => subnet.length < 3)
  return `submit ${safeNodes.join(',')}`
}
