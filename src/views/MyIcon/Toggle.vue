<template>
  <div class="toggler" :style="{...buttonSizeStyles}">
    <label>
      <input type="checkbox" />
      <span></span>
    </label>
    <strong>
      <slot />
    </strong>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    size: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      buttonWidth: 40,
      buttonHeight: 20,
      toggleDiameter: 16,
      toggleWider: 24
    }
  },
  computed: {
    buttonSizeStyles() {
      return {
        '--button-width': this.buttonWidth * this.size + 'px',
        '--button-height': this.buttonHeight * this.size + 'px',
        '--toggle-diameter': this.toggleDiameter * this.size + 'px',
        '--toggle-wider': this.toggleWider * this.size + 'px'
      }
    }
  },
  components: {}
}
</script>

<style scoped>
.toggler {
  --button-width: 60px;
  --button-height: 30px;
  --toggle-diameter: 22px;
  --toggle-wider: 333px;

  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  --toggle-shadow-offset: 10px;
  --color-grey: #e9e9e9;
  --color-dark-grey: #39393d;
  --color-green: #30d158;
  display: inline-flex;
}

.toggler strong {
  line-height: var(--button-height);
  font-size: calc(var(--toggle-diameter) / 10);
  margin-left: calc(var(--toggle-diameter) / 6);
  color: #1c1c1e;
}

span {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
}

span::after {
  content: '';
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

input[type='checkbox']:checked + span {
  background-color: var(--color-green);
}

input[type='checkbox']:checked + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)
    )
  );
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:active + span::after {
  width: var(--toggle-wider);
}

input[type='checkbox']:checked:active + span::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
    )
  );
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #1c1c1e;
  }

  span {
    background-color: var(--color-dark-grey);
  }
}
</style>