<template>
    <main class="mt-5 mb-5" style="padding-inline: calc(15% / 2);">
        <section class="profile-area">
            <h1 class="font-weight-semibold">Informasi Pribadi</h1>
            <div class="p-5 w-100 h-100 rounded-20 container-card-shadow d-flex flex-column align-items-center mt-5">
                <img src="@/assets/images/profile/user-profile.svg" alt="" class="w-25 h-25">
                <div class="profile-container row justify-content-around mt-4">
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Nama</h3>
                        <h3 id="lendeesName" class="font-weight-semibold text-primary par-1-2em">John Doe</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Peran</h3>
                        <h3 id="lendeesRole" class="font-weight-semibold text-primary par-1-2em">Peminjam</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Email</h3>
                        <h3 class="font-weight-semibold text-primary par-1-2em"><span id="lendeesEmail">johndoe</span>@gmail.com</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Nomor HP</h3>
                        <h3 id="lendeesPhoneNumber" class="font-weight-semibold text-primary par-1-2em">08123456789</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">NPM</h3>
                        <h3 id="lendeesNPM" class="font-weight-semibold text-primary par-1-2em">1019201923</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Fakultas</h3>
                        <h3 id="lendeesFaculty" class="font-weight-semibold text-primary par-1-2em">Informatika</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Jurusan</h3>
                        <h3 id="lendeeMajor" class="font-weight-semibold text-primary par-1-2em">Teknik Informatika</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Kelas</h3>
                        <h3 id="lendeeClass" class="font-weight-semibold text-primary par-1-2em">TIF RM 222</h3>
                    </div>
                    <div class="card col-sm-5 col-md-5 col-lg-4 p-4 bg-secondary border-0 rounded-10 mb-4">
                        <h3 class="par-1em">Foto KTM</h3>
                        <a href="#lender_idCard_modal" data-target="#lender_idCard_modal" data-toggle="modal" id="lendeesStudentCardImage" class="btn-link font-weight-semibold text-primary par-1-2em" style="text-decoration: underline;" aria-label="Klik untuk melihat Foto KTM">Klik untuk melihat</a>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="modal fade" tabindex="-1" id="lender_idCard_modal" aria-labelledby="lender_idCard_modaltitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="lender_idCard_modaltitle">Foto KTM</h5>
                        </div>
                        <div class="modal-body">
                            <img src="../../assets/images/id-card/peminjam.png" class="w-100" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    name: 'Account',
    data() {
        return {
            
        }
    }
}
</script>