import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './entities/wallet-address.entity';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  // Create a new wallet address
  async create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    try {
      const walletAddress = new WalletAddress();
      walletAddress.address = createWalletAddressDto.address;
      walletAddress.user_id = createWalletAddressDto.user_id;
      
      return this.walletAddressRepository.save(walletAddress);
    } catch (error) {
      // Handle any errors that occur during creation
      throw new Error(`Could not create wallet address: ${error.message}`);
    }
  }

  // Retrieve all wallet addresses
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  // Find a wallet address by ID
  async findOne(id: number): Promise<WalletAddress> {
    try {
      const walletAddress = await this.walletAddressRepository.findOne({ where: { id } });
      if (!walletAddress) {
        // Throw a NotFoundException if the wallet address is not found
        throw new NotFoundException(`Wallet address with ID ${id} not found`);
      }
      return walletAddress;
    } catch (error) {
      // Handle any errors that occur during retrieval or if the ID is invalid
      throw new Error(`Could not find wallet address: ${error.message}`);
    }
  }

  // Update a wallet address by ID
  async update(id: number, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress> {
    try {
      await this.walletAddressRepository.update(id, updateWalletAddressDto);
      return this.findOne(id);
    } catch (error) {
      // Handle any errors that occur during update or if the ID is invalid
      throw new Error(`Could not update wallet address: ${error.message}`);
    }
  }

  // Remove a wallet address by ID
  async remove(id: number): Promise<void> {
    try {
      const result = await this.walletAddressRepository.delete(id);
      if (result.affected === 0) {
        // Throw a NotFoundException if the wallet address is not found for deletion
        throw new NotFoundException(`Wallet address with ID ${id} not found for deletion`);
      }
    } catch (error) {
      // Handle any errors that occur during deletion or if the ID is invalid
      throw new Error(`Could not remove wallet address: ${error.message}`);
    }
  }
}
