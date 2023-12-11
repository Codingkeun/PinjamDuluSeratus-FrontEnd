<template>
    <main>
        <section class="container hero">
            <div class="content">Tingkatkan Perjalanan Keuangan Anda Bersama <span class="text-primary">Pinjam Dulu Seratus</span></div>
            <div class="image"></div>
        </section>
        <section class="solution">
            <div class="container">
                <div class="header">
                    <div class="h5 text-center text-white font-weight-normal">Solusi Terbaik</div>
                    <div class="h1 text-center text-white font-weight-bold">Untuk pinjaman darurat Anda</div>
                </div>
                <div class="content">
                    <div class="card rounded-10">
                        <div class="card-body">
                            <div class="d-flex justify-content-center flex-column p-3">
                                <div class="d-block text-primary text-center mb-2">
                                    <span class="material-symbols-outlined mb-3" style="font-size: 50pt">
                                        encrypted
                                    </span>
                                    <h3 class="h4 font-weight-semibold">Lebih Aman</h3>
                                </div>
                                <p>Menggantikan sistem bunga dengan tip kepada investor, sehingga Anda dapat terhindar dari risiko terlilit dalam utang bunga yang tinggi</p>
                            </div>
                        </div>
                    </div>
                    <div class="card rounded-10">
                        <div class="card-body">
                            <div class="d-flex justify-content-center flex-column p-3">
                                <div class="d-block text-primary text-center mb-2">
                                    <span class="material-symbols-outlined mb-3" style="font-size: 50pt">
                                        airwave
                                    </span>
                                    <h3 class="h4 font-weight-semibold">Fleksibel</h3>
                                </div>
                                <p>Besaran tip ditentukan sendiri oleh peminjam. Serta, terdapat saldo donasi untuk membantu Anda melunasi terlebih dahulu pinjaman yang didapat</p>
                            </div>
                        </div>
                    </div>
                    <div class="card rounded-10">
                        <div class="card-body">
                            <div class="d-flex justify-content-center flex-column p-3">
                                <div class="d-block text-primary text-center mb-2">
                                    <span class="material-symbols-outlined mb-3" style="font-size: 50pt">
                                        page_control
                                    </span>
                                    <h3 class="h4 font-weight-semibold">Langkah yang mudah</h3>
                                </div>
                                <p>Proses peminjaman dilakukan dalam beberapa langkah yang mudah dan singkat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mission-container" style="padding-inline: calc(15% / 2); margin-top: 120px;">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <img src="@/assets/images/illustration/mission-section.svg" class="w-100 col-md-5 col-lg-5 order-2" alt="">
                    <div class="col-md-7 col-lg-7">
                        <div>
                            <h4 class="pt-4 par-1em">Sejak 2023</h4>
                            <h1 class="font-weight-bold text-primary">Misi Kami</h1>
                        </div>
                        <p class="mt-4">
                            Setiap individu berhak mendapatkan akses pendidikan yang adil dan setara. Misi kami adalah memberdayakan setiap individu untuk mengejar impian pendidikan mereka tanpa terkendala oleh masalah finansial. 
                            <br><br>
                            Melalui kerja sama dengan pihak universitas, kami berharap dapat mendukung mahasiswa dalam menghadapi keadaan darurat dan membangun masa depan yang lebih baik.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="lender-investor-registration-cta" style="margin-top: 120px;" v-if="!$store.state.user?.logged_in">
            <div class="container">
                <div class="d-flex flex-column align-items-center" style="gap: 1rem; padding-inline: calc(15% / 2);">
                    <h1 class="font-weight-bold text-primary text-center">Daftar<br>Sebagai Peminjam</h1>
                    <p class="text-center">
                        <span>Mari ajukan dana darurat Anda melalui platform</span> 
                        <span>Pinjam Dulu Seratus tanpa risiko terjebak dalam utang bunga.</span>
                    </p>
                    <router-link to="/signup/peminjam" class="d-flex align-items-center btn btn-primary font-weight-semibold">Daftar Sebagai Peminjam</router-link>
                </div>
                <div class="mt-5">
                    <img src="@/assets/images/illustration/register-lender-section-1.svg" alt="">
                    <img src="@/assets/images/illustration/register-lender-section-2.svg" alt="">
                    <img src="@/assets/images/illustration/register-lender-section-3.svg" alt="">
                    <img src="@/assets/images/illustration/register-lender-section-4.svg" alt="">
                </div>
                <div class="d-flex flex-column align-items-center" style="gap: 1rem; padding-inline: calc(15% / 2);">
                    <h1 class="font-weight-bold text-primary text-center">Daftar<br>Sebagai Investor</h1>
                    <p class="text-center">
                        <span>Mari berinvestasi bersama kami dengan menyediakan</span>
                        <span>dana darurat kepada mahasiswa yang membutuhkan.</span>
                    </p>
                    <router-link to="/signup/investor" class="d-flex align-items-center btn btn-primary font-weight-semibold">Daftar Sebagai Investor</router-link>
                </div>
            </div>
            <img src="@/assets/images/background/big-circle-gradient.svg" alt="">
        </section>
        <section class="donation" :style="{'margin-top': $store.state.user?.logged_in ? '300px' : ''}">
            <div class="container">
                <div class="balance">
                    <div class="content">
                        <div class="text-center">
                            <img src="@/assets/images/background/balance_money.svg" style="position: relative; top: -120px;" />
                        </div>
                    </div>
                </div>
                <div class="balance-description">
                    <div class="h1 font-weight-bold text-primary">Ayo Berdonasi</div>
                    <p class="description mt-4">
                        Anda bisa membantu kami dalam menyediakan dana darurat ke mahasiswa yang membutuhkan tanpa harus melakukan registasi akun.
                        Berapapun dana donasi yang Anda berikan dapat membantu para mahasiswa dalam mempersiapkan dana pendidikan.
                    </p>
                    <div class="btn-group mt-4">
                        <router-link to="Donation" class="btn rounded-10 d-flex align-items-center border-0 p-2 login-register-button font-weight-semibold">
                            Donasi Sekarang
                            <span class="material-symbols-outlined rounded-5 mx-2 login-register-arrow-icon">
                                keyboard_arrow_right
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="announcement container d-flex flex-column">
            <div class="card bg-primary rounded-10 mb-4">
                <div class="card-body d-flex align-items-center text-white">
                    <img src="@/assets/images/icon/stopwatch.svg" />
                    <div class="d-block ml-3">
                        <div class="h6">Announcement</div>
                        <div class="h4 font-weight-semibold">Peminjam yang telat bayar</div>
                    </div>
                </div>
            </div>
            <div class="list mt-4">
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
                <div class="card rounded-10">
                    <div class="card-body pb-2">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/images/icon/avatar.svg" />
                            <div class="d-block ml-3" style="font-weight: 500;">
                                <div class="h4">John Doe</div>
                                <div class="h5">NPM : <span class="text-primary">10129301</span></div>
                            </div>
                        </div>
                        <div class="h5 alert alert-danger rounded-10 p-2 text-center font-weight-bold mt-4">Telat 28 Hari</div>
                    </div>
                </div>
            </div>
            <!-- Pagination -->
            <Pagination></Pagination>
        </section>
    </main>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
        }
    },
}
</script>