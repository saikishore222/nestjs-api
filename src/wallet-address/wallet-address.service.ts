import { Injectable } from '@nestjs/common';
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
  
  async create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress> {
    const walletAddress = new WalletAddress();
    walletAddress.address = createWalletAddressDto.address;
    walletAddress.type = createWalletAddressDto.type;
    
    return this.walletAddressRepository.save(walletAddress);
  }

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne({ where: { id } });
  }

  async update(id: number, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress> {
    await this.walletAddressRepository.update(id, updateWalletAddressDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
