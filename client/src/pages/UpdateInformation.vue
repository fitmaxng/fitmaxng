<template>
    <q-page>
      <div id="container">
        <div style="margin-top: -95px">
          <q-form>
          <div>
            <label>
              <input type="file" style="display: none" name="profile">
              <div><AvaterCircleIcon /></div>
              <div id="pencil-icon"><PencilIcon /></div>
            </label>
          </div>
          <div style="margin-top: 23px">
            <strong>
              <div style="font-size: 15px">
                <DisplayTextSingle :Small="true" Text="Edit Personal Profile" Color="dark" />
              </div>
            </strong>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="text" TextFieldName="username"  LabelText="Edit Name" TextWithIn=""/>
            </div>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="email" TextFieldName="email"  LabelText="Change Email" TextWithIn=""/>
            </div>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="text" TextFieldName="update_location"  LabelText="Update Location" TextWithIn=""/>
            </div>
          </div>
           <div style="margin-top: 23px">
            <strong>
              <div style="font-size: 15px">
                <DisplayTextSingle :Small="true" Text="Change Password" Color="dark" />
              </div>
            </strong>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="password" TextFieldName="current_password"  LabelText="Current Password" TextWithIn=""/>
            </div>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="password" TextFieldName="new_password"  LabelText="New Password" TextWithIn=""/>
            </div>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="password" TextFieldName="confirm_password"  LabelText="Confirm Password" TextWithIn=""/>
            </div>
            <div class="mt">
              <Button Type="submit" Specification="contain-success text-dark radius-3 font-weight-bold px-max py-1 float-left" Text="SAVE" />
            </div>
          </div>
          </q-form>
        </div>
      </div>
    </q-page>
</template>

<script>
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
import AvaterCircleIcon from '../components/includes/icons/AvaterCirlcle'
import TextField from '../components/includes/TextField'
import PencilIcon from '../components/includes/icons/PencilCircle'
import Button from '../components/includes/Button'
export default {
  name: 'OtherClasses',
  components: {
    AvaterCircleIcon,
    PencilIcon,
    DisplayTextSingle,
    TextField,
    Button
  },
  mounted () {
    this.$store.dispatch('main/setActionNavigated', 'loggedin')
  }
}
</script>

<style scoped lang="scss">
  #container {
    padding-right: 42px;
    padding-left: 42px;
    padding-bottom: 90px;
  }

  #pencil-icon {
    position: absolute;
    margin-top: -30px;
    margin-left: 49px;
  }
  .mt {
    margin-top: 22px;
  }
</style>
