<a href="Home.md"><img align="left" width="80" height="80" src="../Images/logo_Z4D.png" alt="Logo"></a>

# Pairing a Zigbee device with the coordinator

</br>


## Introduction

Purpose is to explain the step process to pair a new device and get it into DomoticZ.


## Step1: Put DomoticZ in 'Add New Hardware mode'

1. Check that DomoticZ accept new Hardware Devices
   * Go in the DomoticZ Setting menu, and check that Accept new Hardware Devices is enabled, as on the picture here after

   ![Domoticz Accept New Hardware](../Images/DzHardwareMode.png)


## Step2: Pairing and Provisioning in DomoticZ

1. Assited Provisioning

   1. Go to the Admin -> Provisioning menu

      ![Domoticz Accept New Hardware](../Images//Provisionning_1.png)

      from here you have 4 choices

      1. Use the Assisted Provisioning mode
      1. Accept new Hardware for a period of 4 minutes (same as section 2 but for a limited period of time)
      1. Accept new Hardware in a permanent maner (same as section 2)
      1. Stop accepting new Hardware

   1. Go for "Assisted Provisioning" ( This will enable pairing for 4 minutes )

      ![Assisted Provisioning: Start](../Images/Provisionning_2.png)

   1. Check that the coordinator Led is flashing or has changed of colour (depends on your coordinator).

   1. Reset your Device to trigger the pairing

      ![Assisted Provisioning: Done](../Images/Provisionning_3.png)

   1. If after a while ( 2 minutes ) nothing happen

      1. Check DomoticZ Log to se if there is no error
      1. Restart the plugin and try the pairing once more time

1. Advanced provisioning

Here we will more rely on the Logs to see that the Provisioning is happening. The DomoticZ logs are available via the DomoticZ User Interface.
You can eventually add a filter to get only the related logs

  1. You can check if the Accept new hardware`

  ![Domoticz Accept New Hardware](../Images/Dashboard_Accept_new_Hardware.png)

  You can easily switch it On, and the coordinator Led, must start flashing or changing colour (depends on your coordinator).

  1. reset the Device to trgger the pairing.

  1. Watch the DomoticZ log to see what is happening.



  # Pairing from a specific Router

  ## Introduction

  You might want to force the pairing of a specific end device to a dedicated router instead of leaving the Controler to decided.
  Despite the fact that the pairing will be done to a specific router, the system can then later decide to change the route and
  you/we don't have any control to that.


  ## What to do

  1. Make sure the coordinator is not in pairing mode, if yes, Stop it

  1. From the Plugin Web User Interface

  ![Pairing From a Router](../Images/PairingOnRouter.png)

  1. Click on the __Provisionning__ menu
  1. In the _Accept new Hardware on router__ select from the List the router you want to use
  1. Enable the Pairing for 4 minutes

  __Attention__

  It may happen that after pairing a device the all routers switches to pairing mode. If you want to continue pairing only from that specific device, you need to redo the all cycle.
