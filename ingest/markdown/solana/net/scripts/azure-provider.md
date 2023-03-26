[View code on GitHub](https://github.com/solana-labs/solana/blob/master/net/scripts/azure-provider.sh)

The `azure-provider.sh` script provides utility functions for working with Azure instances in the Solana project. It is designed to manage instances, create and delete instances, fetch files from instances, and perform one-time initialization for a given testnet.

The `cloud_DefaultZone()` function returns the default zone, which is "westus". The `cloud_GetConfigValueFromInstanceName()` function returns a piece of configuration information about an instance, given the instance name and the configuration key. The `cloud_GetResourceGroupFromInstanceName()` and `cloud_GetIdFromInstanceName()` functions return the resource group and ID of an instance, respectively.

The `__cloud_FindInstances()` function finds instances matching a specified pattern and adds information about the instance to the `instances` array. The `cloud_FindInstances()` and `cloud_FindInstance()` functions are used to find instances with names matching a specified prefix or an exact name, respectively.

The `cloud_Initialize()` function performs one-time initialization for a given testnet, such as creating a resource group and network security group (NSG) if they don't exist, and adding NSG rules for inbound traffic.

The `cloud_CreateInstances()` function creates one or more identical instances with specified parameters, such as network name, name prefix, number of nodes, machine type, zone, and optional parameters like boot disk size, startup script, address, boot disk type, and preemptible instances. If GPU is enabled, it installs the appropriate extension.

The `cloud_DeleteInstances()` function deletes all instances listed in the `instances` array. The `cloud_WaitForInstanceReady()` function waits for a newly created VM instance to be ready and responsive. The `cloud_FetchFile()` function fetches a file from a given instance using SCP.

The `cloud_CreateAndAttachPersistentDisk()` and `cloud_StatusAll()` functions are not yet implemented for the Azure provider.
## Questions: 
 1. **Question**: What is the purpose of the `cloud_DefaultZone()` function and what does it return?
   **Answer**: The `cloud_DefaultZone()` function is used to provide the default zone for Azure instances. It returns the string "westus", which represents the West US region in Azure.

2. **Question**: How does the `cloud_GetConfigValueFromInstanceName()` function work and what are its inputs and outputs?
   **Answer**: The `cloud_GetConfigValueFromInstanceName()` function takes two arguments: the exact name of an instance and a configuration key. It queries the Azure VM list using the provided instance name and configuration key, and returns the corresponding value for that key.

3. **Question**: How does the `cloud_CreateInstances()` function create instances and what are its input parameters?
   **Answer**: The `cloud_CreateInstances()` function creates one or more identical instances on Azure using the provided input parameters. These parameters include networkName, namePrefix, numNodes, enableGpu, machineType, zone, optionalBootDiskSize, optionalStartupScript, optionalAddress, optionalBootDiskType, and preemptible. The function uses the Azure CLI (`az vm create`) to create the instances with the specified configuration and options.